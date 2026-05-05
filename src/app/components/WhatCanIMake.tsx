import { ChefHat, Package, ArrowRight, Sparkles, Camera, ScanLine, Upload } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router';
import { trackCTAClick, trackHomePath, trackIngredientSelection, trackToolStart } from '../utils/analytics';

const PANTRY_ITEMS = [
  { id: 'flour', label: 'Flour (all-purpose)' },
  { id: 'butter', label: 'Butter' },
  { id: 'sugar', label: 'Sugar (white or brown)' },
  { id: 'eggs', label: 'Eggs' },
  { id: 'baking_powder', label: 'Baking powder / soda' },
  { id: 'salt', label: 'Salt' },
  { id: 'milk', label: 'Milk' },
  { id: 'cream', label: 'Heavy cream' },
  { id: 'chocolate', label: 'Chocolate / cocoa' },
  { id: 'yeast', label: 'Yeast' },
  { id: 'coffee', label: 'Coffee beans / grounds' },
  { id: 'vanilla', label: 'Vanilla' },
  { id: 'oil', label: 'Oil' },
  { id: 'cornstarch', label: 'Cornstarch / starch' },
] as const;

type PantryId = (typeof PANTRY_ITEMS)[number]['id'];

type BarcodeEntry = {
  code: string;
  item: PantryId;
  label: string;
};

const BARCODE_TO_ITEM: BarcodeEntry[] = [
  { code: '041196910058', item: 'flour', label: 'All-purpose flour (barcode match)' },
  { code: '041196910355', item: 'sugar', label: 'Granulated sugar (barcode match)' },
  { code: '041196910652', item: 'salt', label: 'Salt (barcode match)' },
  { code: '041196910959', item: 'cornstarch', label: 'Cornstarch (barcode match)' },
  { code: '041196911055', item: 'yeast', label: 'Yeast (barcode match)' },
  { code: '036800291452', item: 'eggs', label: 'Eggs (barcode match)' },
  { code: '036800146776', item: 'milk', label: 'Milk (barcode match)' },
  { code: '036800146783', item: 'cream', label: 'Heavy cream (barcode match)' },
  { code: '028000125992', item: 'butter', label: 'Butter (barcode match)' },
  { code: '041497155024', item: 'oil', label: 'Oil (barcode match)' },
  { code: '041497155413', item: 'vanilla', label: 'Vanilla (barcode match)' },
  { code: '041497155901', item: 'coffee', label: 'Coffee (barcode match)' },
] as const;

const FRIDGE_QUICK_TAGS: { id: PantryId; label: string }[] = [
  { id: 'eggs', label: 'Egg carton' },
  { id: 'milk', label: 'Milk carton' },
  { id: 'cream', label: 'Cream' },
  { id: 'butter', label: 'Butter sticks' },
  { id: 'chocolate', label: 'Chocolate' },
  { id: 'oil', label: 'Cooking oil' },
  { id: 'yeast', label: 'Yeast jar' },
  { id: 'vanilla', label: 'Vanilla extract' },
  { id: 'sugar', label: 'Sugar container' },
  { id: 'flour', label: 'Flour bag' },
];

const PRODUCT_NAME_KEYWORDS: Array<{ id: PantryId; keywords: string[] }> = [
  { id: 'flour', keywords: ['flour'] },
  { id: 'butter', keywords: ['butter', 'ghee'] },
  { id: 'sugar', keywords: ['sugar', 'brown sugar'] },
  { id: 'eggs', keywords: ['egg'] },
  { id: 'baking_powder', keywords: ['baking powder', 'baking soda'] },
  { id: 'salt', keywords: ['salt'] },
  { id: 'milk', keywords: ['milk'] },
  { id: 'cream', keywords: ['cream', 'half and half'] },
  { id: 'chocolate', keywords: ['chocolate', 'cocoa'] },
  { id: 'yeast', keywords: ['yeast'] },
  { id: 'coffee', keywords: ['coffee', 'espresso'] },
  { id: 'vanilla', keywords: ['vanilla'] },
  { id: 'oil', keywords: ['olive oil', 'canola oil', 'vegetable oil', 'oil'] },
  { id: 'cornstarch', keywords: ['cornstarch', 'corn starch', 'starch'] },
];

const TOOL_LINKS = {
  CookieSensei: 'https://cookiesensei.senseifood.com',
  CakeSensei: 'https://cakesensei.senseifood.com',
  PieSensei: 'https://piesensei.senseifood.com',
  IceCreamSensei: 'https://icecreamsensei.senseifood.com',
  BeanSensei: 'https://beansensei.senseifood.com',
  BreadSensei: '/bread-sensei',
} as const;

type Suggestion =
  | {
      kind: 'tool';
      title: string;
      blurb: string;
      href: string;
      toolName: keyof typeof TOOL_LINKS;
    }
  | {
      kind: 'article';
      title: string;
      blurb: string;
      to: string;
    };

function buildSuggestions(selected: Set<PantryId>): Suggestion[] {
  const has = (...ids: PantryId[]) => ids.every((id) => selected.has(id));
  const any = (...ids: PantryId[]) => ids.some((id) => selected.has(id));
  const out: Suggestion[] = [];

  if (has('flour', 'butter', 'sugar') || (has('flour', 'sugar') && has('oil'))) {
    out.push({
      kind: 'tool',
      title: 'Cookies, brownies & bar bakes',
      blurb: 'Shape spread, chew, and richness from what you checked off.',
      href: TOOL_LINKS.CookieSensei,
      toolName: 'CookieSensei',
    });
  }

  if (has('flour', 'eggs', 'sugar') && any('butter', 'oil', 'milk')) {
    out.push({
      kind: 'tool',
      title: 'Cakes & cupcakes',
      blurb: 'Structure, crumb, and moisture — dial ratios with a cake-first builder.',
      href: TOOL_LINKS.CakeSensei,
      toolName: 'CakeSensei',
    });
  }

  if (has('flour', 'butter') && any('sugar', 'salt')) {
    out.push({
      kind: 'tool',
      title: 'Pie crust & fillings',
      blurb: 'Flaky crust chemistry and thickeners for slices that hold.',
      href: TOOL_LINKS.PieSensei,
      toolName: 'PieSensei',
    });
  }

  if (
    (has('cream', 'sugar') && any('milk', 'eggs')) ||
    (has('milk', 'sugar', 'eggs') && any('vanilla'))
  ) {
    out.push({
      kind: 'tool',
      title: 'Ice cream & frozen desserts',
      blurb: 'Frozen texture, iciness, and scoopability from your dairy and sugar.',
      href: TOOL_LINKS.IceCreamSensei,
      toolName: 'IceCreamSensei',
    });
  }

  if (has('coffee')) {
    out.push({
      kind: 'tool',
      title: 'Coffee extraction',
      blurb: 'Grind, ratio, and time — fix bitter, sour, or weak cups.',
      href: TOOL_LINKS.BeanSensei,
      toolName: 'BeanSensei',
    });
  }

  if (has('flour', 'yeast')) {
    out.push({
      kind: 'tool',
      title: 'Bread & yeast dough',
      blurb: 'Hydration, enrichment, baker’s %, nutrition, and bake steps for ten classic bread families.',
      href: TOOL_LINKS.BreadSensei,
      toolName: 'BreadSensei',
    });
  }

  return out;
}

export function WhatCanIMake() {
  const [selected, setSelected] = useState<Set<PantryId>>(() => new Set());
  const [barcodeInput, setBarcodeInput] = useState('');
  const [barcodeStatus, setBarcodeStatus] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoStatus, setPhotoStatus] = useState<string | null>(null);
  const [scannerStatus, setScannerStatus] = useState<string | null>(null);
  const [isBarcodeLoading, setIsBarcodeLoading] = useState(false);
  const [isVisionLoading, setIsVisionLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [lastBarcode, setLastBarcode] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const barcodeMap = useMemo(() => new Map(BARCODE_TO_ITEM.map((e) => [e.code, e])), []);
  const pantryLabelMap = useMemo(
    () => new Map(PANTRY_ITEMS.map((item) => [item.id, item.label])),
    []
  );

  const toggle = useCallback((id: PantryId) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const suggestions = useMemo(() => buildSuggestions(selected), [selected]);

  const selectedLabels = useMemo(
    () =>
      PANTRY_ITEMS.filter((item) => selected.has(item.id))
        .map((item) => item.label),
    [selected]
  );

  const trackSelectionAndTool = (s: Extract<Suggestion, { kind: 'tool' }>, source: string) => {
    const labels = PANTRY_ITEMS.filter((i) => selected.has(i.id)).map((i) => i.label);
    trackIngredientSelection(labels);
    trackCTAClick(source, `open_${s.toolName}`, s.href);
    trackToolStart(s.toolName, source);
  };

  const handleBrowseTools = () => {
    trackCTAClick('what_can_i_make', 'browse_all_tools', '#pick-starting-point');
  };

  const handleScrollToPicker = () => {
    trackHomePath('ingredients', 'what_can_i_make_section');
    trackCTAClick('what_can_i_make', 'jump_to_ingredient_picker', '#ingredient-picker');
  };

  const applyItem = useCallback(
    (id: PantryId, source: string, label: string) => {
      setSelected((prev) => {
        if (prev.has(id)) return prev;
        const next = new Set(prev);
        next.add(id);
        return next;
      });
      trackCTAClick('what_can_i_make', `add_item_${source}`, label);
    },
    []
  );

  const inferPantryIdFromText = useCallback((text: string): PantryId | null => {
    const lower = text.toLowerCase();
    for (const row of PRODUCT_NAME_KEYWORDS) {
      if (row.keywords.some((k) => lower.includes(k))) return row.id;
    }
    return null;
  }, []);

  const lookupBarcodeWithApi = useCallback(
    async (code: string): Promise<{ item: PantryId; productName: string } | null> => {
      try {
        const res = await fetch(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json`);
        if (!res.ok) return null;
        const data = (await res.json()) as {
          product?: { product_name?: string; product_name_en?: string };
        };
        const productName = data.product?.product_name_en ?? data.product?.product_name ?? '';
        if (!productName) return null;
        const inferred = inferPantryIdFromText(productName);
        if (!inferred) return null;
        return { item: inferred, productName };
      } catch {
        return null;
      }
    },
    [inferPantryIdFromText]
  );

  const handleBarcodeLookup = useCallback(
    async (rawCode: string, source: 'manual' | 'camera') => {
      const normalized = rawCode.replace(/[^\d]/g, '');
      if (!normalized) {
        setBarcodeStatus('Enter a barcode to scan.');
        return;
      }
      setIsBarcodeLoading(true);
      try {
        const localHit = barcodeMap.get(normalized);
        if (localHit) {
          applyItem(localHit.item, `barcode_${source}`, localHit.label);
          setBarcodeStatus(`Added: ${localHit.label}`);
          setLastBarcode(normalized);
          trackIngredientSelection(
            PANTRY_ITEMS.filter((i) => selected.has(i.id) || i.id === localHit.item).map((i) => i.label)
          );
          return;
        }

        const apiHit = await lookupBarcodeWithApi(normalized);
        if (apiHit) {
          const label = `${apiHit.productName} (barcode API match)`;
          applyItem(apiHit.item, `barcode_api_${source}`, label);
          setBarcodeStatus(`Added from API: ${pantryLabelMap.get(apiHit.item) ?? apiHit.item}`);
          setLastBarcode(normalized);
          return;
        }

        setBarcodeStatus(`No pantry match for ${normalized} yet. You can still check items manually below.`);
        trackCTAClick('what_can_i_make', `barcode_no_match_${source}`, normalized);
      } finally {
        setIsBarcodeLoading(false);
      }
    },
    [applyItem, barcodeMap, lookupBarcodeWithApi, pantryLabelMap, selected]
  );

  const stopScanner = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setIsScanning(false);
    setScannerStatus('Scanner stopped.');
  }, []);

  const startScanner = useCallback(async () => {
    if (typeof window === 'undefined') return;
    const mediaDevicesSupported = !!navigator.mediaDevices?.getUserMedia;
    if (!mediaDevicesSupported) {
      setScannerStatus('Camera access is not available in this browser. Use manual barcode entry.');
      return;
    }

    if (!window.isSecureContext) {
      setScannerStatus('Camera scanning needs HTTPS (or localhost). Use manual barcode entry for now.');
      return;
    }

    const hasBarcodeDetector = 'BarcodeDetector' in window;
    if (!hasBarcodeDetector) {
      setScannerStatus(
        'Camera barcode scanning is not supported in this browser yet. Try latest Chrome/Edge, or enter code manually.'
      );
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => undefined);
      }
      setIsScanning(true);
      setScannerStatus('Point your camera at a barcode.');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const BarcodeDetectorCtor = (window as any).BarcodeDetector;
      let formats = ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128'];
      if (typeof BarcodeDetectorCtor.getSupportedFormats === 'function') {
        const supported = (await BarcodeDetectorCtor.getSupportedFormats()) as string[];
        formats = formats.filter((f) => supported.includes(f));
      }
      const detector = new BarcodeDetectorCtor({ formats });

      const scanFrame = async () => {
        if (!videoRef.current || !streamRef.current) return;
        try {
          const codes = await detector.detect(videoRef.current);
          if (codes?.length) {
            const code = String(codes[0].rawValue ?? '');
            if (code && code !== lastBarcode) {
              setBarcodeInput(code);
              void handleBarcodeLookup(code, 'camera');
            }
          }
        } catch {
          // Keep scanning; transient frame failures are common in low light or motion.
        }
        if (streamRef.current) requestAnimationFrame(scanFrame);
      };
      requestAnimationFrame(scanFrame);
      trackCTAClick('what_can_i_make', 'start_barcode_camera_scanner', 'camera_barcode');
    } catch {
      setScannerStatus('Could not access camera. Check browser permissions.');
    }
  }, [handleBarcodeLookup, lastBarcode]);

  useEffect(() => () => stopScanner(), [stopScanner]);
  useEffect(
    () => () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    },
    [photoPreview]
  );

  const detectPhotoIngredients = useCallback(
    async (file: File): Promise<PantryId[]> => {
      const endpoint = import.meta.env.VITE_INGREDIENT_VISION_ENDPOINT as string | undefined;
      if (!endpoint) return [];

      try {
        const body = new FormData();
        body.append('image', file);
        const res = await fetch(endpoint, { method: 'POST', body });
        if (!res.ok) return [];
        const data = (await res.json()) as { ingredients?: string[] };
        const inferred = (data.ingredients ?? [])
          .map((name) => inferPantryIdFromText(name))
          .filter((id): id is PantryId => id !== null);
        return [...new Set(inferred)];
      } catch {
        return [];
      }
    },
    [inferPantryIdFromText]
  );

  const handlePhotoUpload = async (file: File | null) => {
    if (!file) return;
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    const objectUrl = URL.createObjectURL(file);
    setPhotoPreview(objectUrl);
    setPhotoStatus('Photo added. Running ingredient detection...');
    trackCTAClick('what_can_i_make', 'upload_fridge_photo', file.name);
    setIsVisionLoading(true);
    try {
      const inferredItems = await detectPhotoIngredients(file);
      if (inferredItems.length) {
        inferredItems.forEach((item) => {
          applyItem(item, 'fridge_photo_api', pantryLabelMap.get(item) ?? item);
        });
        setPhotoStatus(
          `Detected ${inferredItems.length} ingredient(s) from photo. You can still quick-tag missing items below.`
        );
      } else {
        const endpoint = import.meta.env.VITE_INGREDIENT_VISION_ENDPOINT as string | undefined;
        if (!endpoint) {
          setPhotoStatus(
            'Photo added. Auto-detection is not configured yet (missing VITE_INGREDIENT_VISION_ENDPOINT), so use quick tags below.'
          );
        } else {
          setPhotoStatus(
            'Photo added. No automatic matches found yet, so use quick tags below to finish your pantry.'
          );
        }
      }
    } finally {
      setIsVisionLoading(false);
    }
  };

  return (
    <section id="what-can-i-make" className="py-24 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div
                id="ingredient-picker"
                className="bg-white rounded-2xl p-6 md:p-8 scroll-mt-28 border border-green-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">What’s in your kitchen?</h3>
                    <p className="text-sm text-muted-foreground">Tap everything you have on hand.</p>
                  </div>
                </div>

                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ScanLine className="w-4 h-4 text-green-700" />
                    <p className="text-sm font-semibold text-green-900">Scan barcode</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={barcodeInput}
                      onChange={(e) => setBarcodeInput(e.target.value)}
                      placeholder="Enter barcode digits"
                      className="flex-1 rounded-lg border border-green-300 bg-white px-3 py-2 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => void handleBarcodeLookup(barcodeInput, 'manual')}
                      className="rounded-lg bg-green-600 text-white px-3 py-2 text-sm font-medium hover:bg-green-700"
                    >
                      {isBarcodeLoading ? 'Looking up...' : 'Add from code'}
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {!isScanning ? (
                      <button
                        type="button"
                        onClick={startScanner}
                        className="inline-flex items-center gap-1 rounded-md border border-green-300 bg-white px-2.5 py-1.5 text-xs font-medium text-green-800"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        Scan with camera
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={stopScanner}
                        className="inline-flex items-center gap-1 rounded-md border border-green-300 bg-white px-2.5 py-1.5 text-xs font-medium text-green-800"
                      >
                        Stop scanner
                      </button>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-green-800">
                    Note: Safari may not support in-browser barcode camera scanning yet. If you are on Safari,
                    use manual barcode entry.
                  </p>
                  {isScanning ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="mt-3 w-full rounded-lg border border-green-200 bg-black/80 aspect-video object-cover"
                    />
                  ) : null}
                  {scannerStatus ? <p className="mt-2 text-xs text-green-800">{scannerStatus}</p> : null}
                  {barcodeStatus ? <p className="mt-1 text-xs text-green-800">{barcodeStatus}</p> : null}
                </div>

                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Upload className="w-4 h-4 text-green-700" />
                    <p className="text-sm font-semibold text-green-900">Show us your fridge</p>
                  </div>
                  <label className="inline-flex items-center gap-2 rounded-lg bg-white border border-green-300 px-3 py-2 text-sm font-medium text-green-800 cursor-pointer">
                    <Camera className="w-4 h-4" />
                    Upload fridge photo
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      className="hidden"
                      onChange={(e) => handlePhotoUpload(e.target.files?.[0] ?? null)}
                    />
                  </label>
                  {photoPreview ? (
                    <img src={photoPreview} alt="Fridge upload preview" className="mt-3 w-full rounded-lg border border-green-200" />
                  ) : null}
                  {photoStatus ? <p className="mt-2 text-xs text-green-800">{photoStatus}</p> : null}
                  {isVisionLoading ? <p className="mt-1 text-xs text-green-800">Detecting ingredients from your photo...</p> : null}
                  <div className="mt-3">
                    <p className="text-xs font-medium text-green-900 mb-2">
                      Quick-tag what you can see in the photo:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {FRIDGE_QUICK_TAGS.map((tag) => (
                        <button
                          key={tag.id}
                          type="button"
                          onClick={() => applyItem(tag.id, 'fridge_photo_tag', tag.label)}
                          className="rounded-full border border-green-300 bg-white px-3 py-1.5 text-xs font-medium text-green-800 hover:bg-green-100"
                        >
                          + {tag.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 max-h-[min(420px,55vh)] overflow-y-auto pr-1">
                  {PANTRY_ITEMS.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${
                        selected.has(item.id)
                          ? 'bg-green-50 border-green-500 shadow-sm'
                          : 'bg-gray-50/80 border-transparent hover:border-green-200'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected.has(item.id)}
                        onChange={() => toggle(item.id)}
                        className="w-5 h-5 accent-green-600 shrink-0"
                      />
                      <span className="text-sm font-medium leading-snug">{item.label}</span>
                    </label>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium">Suggested next steps</span>
                  </div>
                  {selected.size === 0 ? (
                    <p className="text-sm text-white/90">
                      Select at least one ingredient to see which Sensei tool matches what you can make.
                    </p>
                  ) : suggestions.length === 0 ? (
                    <p className="text-sm text-white/90">
                      Add a few basics (flour, sugar, butter, eggs, cream, or coffee) to unlock tool
                      suggestions — or browse all tools below.
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {suggestions.map((s) => (
                        <li key={s.kind === 'tool' ? s.href : s.to}>
                          <div className="text-sm font-semibold">{s.title}</div>
                          <p className="text-xs text-white/85 mt-0.5 mb-2">{s.blurb}</p>
                          {s.kind === 'tool' ? (
                            s.href.startsWith('http') ? (
                              <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackSelectionAndTool(s, 'what_can_i_make_suggestion')}
                                className="inline-flex items-center gap-1 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg"
                              >
                                Open {s.toolName.replace('Sensei', '')} Sensei
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            ) : (
                              <Link
                                to={s.href}
                                onClick={() => trackSelectionAndTool(s, 'what_can_i_make_suggestion')}
                                className="inline-flex items-center gap-1 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg"
                              >
                                Open {s.toolName.replace('Sensei', '')} Sensei
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            )
                          ) : (
                            <Link
                              to={s.to}
                              onClick={() => {
                                trackIngredientSelection(selectedLabels);
                                trackCTAClick('what_can_i_make_suggestion', 'read_bread_science', s.to);
                              }}
                              className="inline-flex items-center gap-1 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg"
                            >
                              Read bread science article
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-2xl opacity-50 pointer-events-none" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm mb-6 shadow-lg">
              <ChefHat className="w-4 h-4" />
              <span>Ingredient discovery</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              What can I make with what I have?
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Scan barcodes, upload a fridge photo, or check your pantry manually. We’ll map what you have
              into the best Sensei path for what you can make right now.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Select ingredients</h3>
                  <p className="text-muted-foreground text-sm">
                    Use barcode scan, fridge-photo tagging, or the checklist.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Get a matching tool</h3>
                  <p className="text-muted-foreground text-sm">
                    Suggestions update as you tap. Each link opens the right builder.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Build the recipe</h3>
                  <p className="text-muted-foreground text-sm">
                    Inside each Sensei you get sliders, ratios, and science — not just a static page.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#ingredient-picker"
                onClick={handleScrollToPicker}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-green-500/30 transition-all hover:scale-[1.02]"
              >
                Jump to ingredient list
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pick-starting-point"
                onClick={handleBrowseTools}
                className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition-all"
              >
                Browse all tools
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {PANTRY_ITEMS.length}+
              </div>
              <p className="text-sm text-muted-foreground">Pantry items + quick photo tags</p>
            </div>
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Barcode
              </div>
              <p className="text-sm text-muted-foreground">Manual entry or camera scan</p>
            </div>
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                5+
              </div>
              <p className="text-sm text-muted-foreground">Sensei builders linked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
