/* ============================================================
   BUG BOPPER — DATA MODULE
   Transcribed verbatim from the 1312 Bug Charts.
   42 bacteria · 14 viruses · 8 fungi · 10 parasites = 74 organisms.

   Per spec: parenthetical qualifiers stripped (no catalase,
   coagulase, facultative, obligate, Enterobacteriaceae, etc.).
   Typos corrected: jirovecii, Filamentous, SARS-CoV-2, indeterminate.
   Grouped entries kept as "___ species" with subspecies listed.

   Load BEFORE the game script:
     <script src="bugs-data.js"></script>
   ============================================================ */
(function (root) {
  "use strict";

  /* The one long value, written once. */
  var GI = "Gram indeterminate, classified as gram negative";

  /* ---------- BACTERIA (42) ----------
     [ name, subspecies|null, gramStain, morphology, oxygen ] */
  var BACT = [
    ["Staphylococcus aureus",            null, "Gram-positive", "Coccus",      "Aerobe"],
    ["Staphylococcus epidermidis",       null, "Gram-positive", "Coccus",      "Aerobe"],
    ["Enterococcus faecalis",            null, "Gram-positive", "Coccus",      "Aerobe"],
    ["Enterococcus faecium",             null, "Gram-positive", "Coccus",      "Aerobe"],
    ["Streptococcus agalactiae (Group B)", null, "Gram-positive", "Coccus",    "Aerobe"],
    ["Streptococcus pneumoniae",         null, "Gram-positive", "Coccus",      "Aerobe"],
    ["Streptococcus pyogenes (Group A)", null, "Gram-positive", "Coccus",      "Aerobe"],
    ["Viridans group streptococci",      null, "Gram-positive", "Coccus",      "Aerobe"],
    ["Neisseria gonorrhoeae",            null, "Gram-negative", "Coccus",      "Aerobe"],
    ["Neisseria meningitidis",           null, "Gram-negative", "Coccus",      "Aerobe"],
    ["Moraxella catarrhalis",            null, "Gram-negative", "Coccus",      "Aerobe"],
    ["Corynebacterium diphtheriae",      null, "Gram-positive", "Bacillus",    "Aerobe"],
    ["Listeria monocytogenes",           null, "Gram-positive", "Bacillus",    "Aerobe"],
    ["Mycobacterium tuberculosis",       null, "Acid-fast",     "Bacillus",    "Aerobe"],
    ["Citrobacter species",              null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Enterobacter species",             null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Escherichia coli",                 null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Klebsiella pneumoniae",            null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Proteus mirabilis",                null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Proteus vulgaris",                 null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Salmonella species",               null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Serratia marcescens",              null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Shigella species", ["S. boydii", "S. dysenteriae", "S. flexneri", "S. sonnei"],
                                               "Gram-negative", "Bacillus",    "Aerobe"],
    ["Pseudomonas aeruginosa",           null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Acinetobacter species",            null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Stenotrophomonas maltophilia",     null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Haemophilus influenzae",           null, "Gram-negative", "Coccobacillus", "Aerobe"],
    ["Helicobacter pylori",              null, "Gram-negative", "Bacillus",    "Aerobe"],
    ["Legionella species", ["L. pneumophila"], "Gram-negative", "Coccobacillus", "Aerobe"],
    ["Campylobacter species", ["C. jejuni"],   "Gram-negative", "Bacillus",    "Aerobe"],
    ["Chlamydia trachomatis",            null, GI,              "Bacillus",    "Anaerobe"],
    ["Chlamydia pneumoniae",             null, GI,              "Bacillus",    "Anaerobe"],
    ["Mycoplasma pneumoniae",            null, "Atypical",      "Spherical/Filamentous", "Aerobe"],
    ["Rickettsia species", ["R. rickettsii"],  "Gram-negative", "Bacillus",    "Aerobe"],
    ["Treponema pallidum",               null, GI,              "Spirochete",  "Microaerophile"],
    ["Bacteroides fragilis",             null, "Gram-negative", "Pleiomorphic", "Anaerobe"],
    ["Clostridium botulinum",            null, "Gram-positive", "Bacillus",    "Anaerobe"],
    ["Clostridium difficile",            null, "Gram-positive", "Bacillus",    "Anaerobe"],
    ["Clostridium tetani",               null, "Gram-positive", "Bacillus",    "Anaerobe"],
    ["Bordetella pertussis",             null, "Gram-negative", "Coccobacillus", "Aerobe"],
    ["Ehrlichia chaffeensis",            null, GI,              "Pleiomorphic", "Aerobe"],
    ["Lactobacillus species",            null, "Gram-positive", "Bacillus",    "Anaerobe"]
  ];

  /* ---------- VIRUSES (14) ----------
     [ name, nucleicAcid, strandedness, envelope, family ] */
  var VIR = [
    ["Hepatitis B virus (HBV)",                   "DNA", "dsDNA circular", "Enveloped",     "Hepadnaviridae"],
    ["Herpes Simplex Virus 1 and 2",              "DNA", "dsDNA linear",   "Enveloped",     "Herpesviridae"],
    ["Varicella-Zoster Virus (VZV)",              "DNA", "dsDNA linear",   "Enveloped",     "Herpesviridae"],
    ["Cytomegalovirus (CMV)",                     "DNA", "dsDNA linear",   "Enveloped",     "Herpesviridae"],
    ["Epstein-Barr Virus (EBV)",                  "DNA", "dsDNA linear",   "Enveloped",     "Herpesviridae"],
    ["Human Immunodeficiency Virus 1 and 2",      "RNA", "ssRNA +sense",   "Enveloped",     "Retroviridae"],
    ["Enterovirus",                               "RNA", "ssRNA +sense",   "Non-enveloped", "Picornaviridae"],
    ["Hepatitis A virus (HAV)",                   "RNA", "ssRNA +sense",   "Non-enveloped", "Picornaviridae"],
    ["Hepatitis C virus (HCV)",                   "RNA", "ssRNA +sense",   "Enveloped",     "Flaviviridae"],
    ["Influenza A virus (Flu A)",                 "RNA", "ssRNA -sense",   "Enveloped",     "Orthomyxoviridae"],
    ["Influenza B virus (Flu B)",                 "RNA", "ssRNA -sense",   "Enveloped",     "Orthomyxoviridae"],
    ["Rotavirus",                                 "RNA", "dsRNA linear",   "Non-enveloped", "Reoviridae"],
    ["Rabies virus",                              "RNA", "ssRNA -sense",   "Enveloped",     "Rhabdoviridae"],
    ["SARS-CoV-2 (COVID-19)",                     "RNA", "ssRNA +sense",   "Enveloped",     "Coronaviridae"]
  ];

  /* ---------- FUNGI (8) ----------
     [ name, subspecies|null, fungalClass ] */
  var FUN = [
    ["Candida species", ["C. albicans", "C. glabrata", "C. krusei", "C. tropicalis"], "Yeast"],
    ["Cryptococcus neoformans",   null, "Yeast"],
    ["Pneumocystis jirovecii",    null, "Yeast-like"],
    ["Blastomyces dermatitidis",  null, "Dimorphic Fungi"],
    ["Coccidioides immitis",      null, "Dimorphic Fungi"],
    ["Histoplasma capsulatum",    null, "Dimorphic Fungi"],
    ["Aspergillus species", ["A. fumigatus", "A. flavus", "A. niger"], "Hyaline Mold"],
    ["Dermatophytes", ["Microsporum", "Epidermophyton", "Trichophyton"], "Dermatophytes"]
  ];

  /* ---------- PARASITES (10) ----------
     [ name, subspecies|null, endo/ecto, class, subgroup, commonName|null ] */
  var PAR = [
    ["Giardia lamblia",        null, "Endoparasite", "Protozoa", "Flagellates", null],
    ["Trichomonas vaginalis",  null, "Endoparasite", "Protozoa", "Flagellates", null],
    ["Entamoeba histolytica",  null, "Endoparasite", "Protozoa", "Amoeba",      null],
    ["Plasmodium species", ["P. malariae", "P. falciparum", "P. vivax", "P. ovale"],
                                     "Endoparasite", "Protozoa", "Sporozoa",    null],
    ["Toxoplasma gondii",      null, "Endoparasite", "Protozoa", "Sporozoa",    null],
    ["Ascaris lumbricoides",   null, "Endoparasite", "Helminth", "Nematode",    "Roundworm"],
    ["Strongyloides stercoralis", null, "Endoparasite", "Helminth", "Nematode", "Threadworm"],
    ["Enterobius vermicularis", null, "Endoparasite", "Helminth", "Nematode",   "Pinworm"],
    ["Pediculus humanus", ["Pediculus humanus capitis", "Pediculus humanus corporis"],
                                     "Ectoparasite", "Insect",   "Lice",        null],
    ["Phthirus pubis",         null, "Ectoparasite", "Insect",   "Lice",        null]
  ];

  /* ---------- normalise into uniform bug objects ---------- */
  function mk(name, subs, cat, attrs) {
    return { name: name, subs: subs, cat: cat, a: attrs };
  }

  var BUGS = [];
  BACT.forEach(function (r) {
    BUGS.push(mk(r[0], r[1], "bacterial", { gram: r[2], shape: r[3], oxy: r[4] }));
  });
  VIR.forEach(function (r) {
    BUGS.push(mk(r[0], null, "viral", { acid: r[1], strand: r[2], env: r[3], fam: r[4] }));
  });
  FUN.forEach(function (r) {
    BUGS.push(mk(r[0], r[1], "fp", { king: "Fungus", fclass: r[2] }));
  });
  PAR.forEach(function (r) {
    var a = { king: "Parasite", p1: r[2], p2: r[3], p3: r[4] };
    if (r[5]) a.p4 = r[5];
    BUGS.push(mk(r[0], r[1], "fp", a));
  });

  var POOLS = {
    bacterial: BUGS.filter(function (b) { return b.cat === "bacterial"; }),
    viral:     BUGS.filter(function (b) { return b.cat === "viral"; }),
    fp:        BUGS.filter(function (b) { return b.cat === "fp"; })
  };

  /* ---------- STAIN PALETTE ----------
     The reward, never the hint. A bug is bone-white ink until
     collected; only then does it take its true stain. */
  var STAINS = {
    violet:   "#8B4DE8",  /* crystal violet  — Gram-positive  */
    safranin: "#FF4D8D",  /* safranin        — Gram-negative  */
    fuchsin:  "#FF4233",  /* carbol fuchsin  — Acid-fast      */
    teal:     "#5FD2C4",  /* Gram-indeterminate               */
    amber:    "#FFB020",  /* Atypical                         */
    dna:      "#4D8BFF",  /* DNA virus                        */
    rna:      "#FFC24D",  /* RNA virus                        */
    fungus:   "#63E6BE",
    parasite: "#C084FC"
  };

  var STAIN_NAMES = {
    "#8B4DE8": "crystal violet",
    "#FF4D8D": "safranin",
    "#FF4233": "carbol fuchsin",
    "#5FD2C4": "teal",
    "#FFB020": "amber",
    "#4D8BFF": "methylene blue",
    "#FFC24D": "gold",
    "#63E6BE": "cotton blue-green",
    "#C084FC": "Giemsa violet"
  };

  function stainOf(b) {
    if (b.cat === "bacterial") {
      var g = b.a.gram;
      if (g === "Gram-positive") return STAINS.violet;
      if (g === "Gram-negative") return STAINS.safranin;
      if (g === "Acid-fast")     return STAINS.fuchsin;
      if (g === GI)              return STAINS.teal;
      return STAINS.amber;                       /* Atypical */
    }
    if (b.cat === "viral") {
      return b.a.acid === "DNA" ? STAINS.dna : STAINS.rna;
    }
    return b.a.king === "Fungus" ? STAINS.fungus : STAINS.parasite;
  }

  function stainName(hex) { return STAIN_NAMES[hex] || ""; }

  /* ---------- human-readable labels for each characteristic ---------- */
  var LABELS = {
    gram:   "Gram stain",
    shape:  "Morphology / shape",
    oxy:    "Oxygen requirement",
    acid:   "Nucleic acid core",
    strand: "Strandedness",
    env:    "Envelope",
    fam:    "Family",
    king:   "Fungus or parasite",
    fclass: "Fungal classification",
    p1:     "Endo- or ectoparasite",
    p2:     "Parasite class",
    p3:     "Parasite subgroup",
    p4:     "Common name"
  };

  /* ---------- export ---------- */
  root.BUG_DATA = {
    GI: GI,
    BUGS: BUGS,
    POOLS: POOLS,
    STAINS: STAINS,
    LABELS: LABELS,
    stainOf: stainOf,
    stainName: stainName,
    counts: {
      bacterial: POOLS.bacterial.length,
      viral:     POOLS.viral.length,
      fp:        POOLS.fp.length,
      total:     BUGS.length
    }
  };
})(window);
