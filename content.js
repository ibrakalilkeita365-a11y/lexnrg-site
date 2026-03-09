// ============================================================
// LEXNRG — CONTENT.JS
// Ce fichier contient TOUT le contenu du site.
// Pour mettre à jour le site : modifiez uniquement ce fichier.
// Ne touchez pas à index.html sauf pour le design.
// ============================================================

const LEXNRG = {

  // ── CHIFFRES CLÉS (section statistiques) ──────────────────
  stats: [
    { num: "40 Mds",  label: "USD investis dans les ENR africaines en 2024" },
    { num: "600M",    label: "Africains sans accès à l'électricité aujourd'hui" },
    { num: "17",      label: "Régimes juridiques ENR différents dans l'espace OHADA" },
    { num: "2 400",   label: "Milliards USD nécessaires pour la transition africaine d'ici 2030" }
  ],

  // ── MODULES ───────────────────────────────────────────────
  // Pour ajouter un module : copier un bloc et modifier les champs.
  modules: [
    {
      id: "country",
      num: "Module 01",
      titre: "Country Intelligence",
      desc: "Fiches pays structurées : cadre légal, textes en vigueur, fiscalité, régulateurs, projets réalisés et ERI Score LEXNRG.",
      tags: ["10 pays", "Trimestriel"],
      bientot: false,
      modal: {
        eyebrow: "Module 01",
        titre: "Country Intelligence",
        sous_titre: "Fiches pays structurées pour les professionnels de l'investissement et du droit ENR africain.",
        stats: [
          { num: "10+", lbl: "pays documentés" },
          { num: "50+", lbl: "textes analysés" },
          { num: "ERI",  lbl: "score par pays" }
        ],
        sections: [
          {
            titre: "Contenu de chaque fiche pays",
            type: "liste",
            items: [
              "Cadre législatif complet — lois fondatrices, décrets d'application, textes ENR spécifiques",
              "Architecture institutionnelle — régulateur, acheteur unique, agences de développement",
              "Projets de référence avec structure de financement détaillée",
              "Avantages fiscaux et mécanismes d'incitation ENR",
              "Vides juridiques identifiés et leur impact sur la bankabilité des projets",
              "ERI Score sur 5 critères : indépendance régulateur, transparence tarifaire, délai licence, PPA standardisé, garantie souveraine",
              "Leçons transposables pour les pays voisins"
            ]
          },
          {
            titre: "Pays disponibles",
            type: "tags",
            items: ["🇲🇦 Maroc ★★★★★", "🇰🇪 Kenya ★★★★★", "🇨🇮 Côte d'Ivoire ★★★★☆", "🇷🇼 Rwanda ★★★★☆", "🇸🇳 Sénégal ★★★☆☆", "🇳🇬 Nigeria ★★★☆☆", "🇨🇲 Cameroun ★★★☆☆", "🇬🇳 Guinée ★★☆☆☆"]
          }
        ],
        cta: "Accéder gratuitement →"
      }
    },
    {
      id: "deal",
      num: "Module 02",
      titre: "Deal Tracker",
      desc: "Suivi en temps réel des projets ENR africains — stade, financement, parties prenantes, montants et structures contractuelles.",
      tags: ["IPPs", "Project Finance"],
      bientot: false,
      modal: {
        eyebrow: "Module 02",
        titre: "Deal Tracker",
        sous_titre: "Suivi en temps réel des transactions et projets ENR africains en cours de développement ou de financement.",
        stats: [],
        sections: [
          {
            titre: "Informations tracées par deal",
            type: "liste",
            items: [
              "Stade : développement / financement / construction / opérationnel",
              "Structure de financement : equity, dette senior, DFIs impliquées",
              "Parties prenantes : développeur, acheteur, prêteurs, conseil juridique",
              "Montant total et décomposition du capital stack",
              "Type de contrat (PPA, concession, BOT) et durée"
            ]
          },
          {
            titre: "Deals de référence documentés",
            type: "liste",
            items: [
              "<strong>Nachtigal (Cameroun)</strong> — 420 MW · 1,5 Md USD · EDF + IFC + BAD + BEI + Proparco",
              "<strong>Taïba N'Diaye (Sénégal)</strong> — 158,7 MW éolien · PPA 20 ans SENELEC · Lekela",
              "<strong>Menengai Phase I (Kenya)</strong> — 105 MW géothermie · GDC PISSAs · 3 IPPs",
              "<strong>AMEA Boundiali (Côte d'Ivoire)</strong> — 37,5 MWp solaire · Proparco + DEG"
            ]
          }
        ],
        cta: "S'inscrire pour accéder →"
      }
    },
    {
      id: "radar",
      num: "Module 03",
      titre: "Regulatory Radar",
      desc: "Veille réglementaire automatisée. Newsletter hebdomadaire. Alertes sur les modifications législatives en Afrique.",
      tags: ["Hebdomadaire", "Alertes"],
      bientot: false,
      modal: {
        eyebrow: "Module 03",
        titre: "Regulatory Radar",
        sous_titre: "Veille réglementaire hebdomadaire sur les évolutions juridiques ENR en Afrique.",
        stats: [],
        sections: [
          {
            titre: "Format hebdomadaire",
            type: "liste",
            items: [
              "🌍 Chiffre de la semaine — donnée clé du secteur ENR africain contextualisée",
              "📌 Focus pays — analyse approfondie d'un cadre réglementaire national",
              "⚖️ Concept juridique — une clause ou un mécanisme contractuel décrypté",
              "🔎 Deal de la semaine — une transaction ENR africaine analysée en détail",
              "📚 Ressource — rapport, décision réglementaire ou texte de référence"
            ]
          },
          {
            titre: "Réglementations suivies",
            type: "tags-gris",
            items: ["Journaux Officiels (10 pays)", "Décisions EPRA / CRSE / NERSA", "Réformes OHADA", "NDCs africains", "Décisions tribunaux ENR"]
          }
        ],
        cta: "Recevoir la newsletter →"
      }
    },
    {
      id: "contract",
      num: "Module 04",
      titre: "Contract Library",
      desc: "Modèles annotés de PPA, concessions, SPV et clauses spéciales : Change of Law, stabilisation fiscale, force majeure.",
      tags: ["PPA", "Concessions", "OHADA"],
      bientot: false,
      modal: {
        eyebrow: "Module 04",
        titre: "Contract Library",
        sous_titre: "Bibliothèque de modèles contractuels annotés pour les projets ENR africains.",
        stats: [],
        sections: [
          {
            titre: "Documents disponibles",
            type: "liste",
            items: [
              "<strong>PPA</strong> — 25 ans, 10 parties, clauses spéciales annotées",
              "<strong>Convention de Concession ENR</strong> — BOT/BOOT/BLT, droits accordés, biens de retour",
              "<strong>Structure SPV</strong> — 3 niveaux, shareholders agreement, waterfall",
              "<strong>Direct Agreement</strong> — droits des prêteurs, step-in rights, substitution",
              "<strong>Implementation Agreement</strong> — garanties souveraines, stabilisation"
            ]
          },
          {
            titre: "Clauses spéciales documentées",
            type: "tags",
            items: ["Change of Law A & B", "Stabilisation fiscale", "Force Majeure ENR", "Take-or-Pay", "Convertibilité USD", "Step-in rights", "DSCR covenant"]
          }
        ],
        cta: "Accéder à la bibliothèque →"
      }
    },
    {
      id: "risk",
      num: "Module 05",
      titre: "Risk Matrix",
      desc: "Cartographie des risques juridiques, réglementaires et souverains par pays et type de projet. Scoring comparatif mis à jour trimestriellement.",
      tags: ["ERI Score", "Risque souverain"],
      bientot: false,
      modal: {
        eyebrow: "Module 05",
        titre: "Risk Matrix",
        sous_titre: "Cartographie comparative des risques juridiques, réglementaires et souverains par pays et type de projet ENR.",
        stats: [],
        sections: [
          {
            titre: "Dimensions évaluées",
            type: "liste",
            items: [
              "Indépendance du régulateur — nomination, budget, capacité technique",
              "Stabilité réglementaire — fréquence révisions tarifaires, PPAs renégociés",
              "Risque de contrepartie — solvabilité acheteur unique, historique paiements",
              "Risque de change — disponibilité devises, convertibilité",
              "Risque foncier — sécurité titre, délai expropriation, compensation"
            ]
          },
          {
            titre: "Scoring (extrait)",
            type: "tags-mixte",
            items: [
              { texte: "Maroc — Risque global : Faible", type: "vert" },
              { texte: "Kenya — Risque global : Faible", type: "vert" },
              { texte: "Sénégal — PPP : Modéré", type: "gris" },
              { texte: "Nigeria — Contrepartie : Élevé", type: "gris" },
              { texte: "Guinée — Réglementaire : Élevé", type: "gris" }
            ]
          }
        ],
        cta: "Accéder à la Risk Matrix →"
      }
    },
    {
      id: "api",
      num: "Bientôt",
      titre: "API & Intégrations",
      desc: "Accès programmatique aux données LEXNRG pour vos outils de due diligence et workflows internes.",
      tags: ["API REST", "Phase 3"],
      bientot: true,
      modal: null
    }
  ],

  // ── PAYS ──────────────────────────────────────────────────
  // Pour ajouter un pays : copier un bloc complet et remplir les champs.
  // Pour modifier une fiche : éditer uniquement le bloc correspondant.
  pays: [
    {
      id: "maroc",
      drapeau: "🇲🇦",
      nom: "Maroc",
      badge: "Leader",
      region: "Afrique du Nord",
      eri: 5,
      tags_carte: ["MASEN", "52% ENR"],
      modal: {
        eyebrow: "Fiche Pays · Afrique du Nord",
        titre: "🇲🇦 Maroc",
        sous_titre: "ERI Score ★★★★★ — Meilleur cadre réglementaire ENR d'Afrique du Nord",
        stats: [
          { num: "52%",    lbl: "Part ENR" },
          { num: "10,6 GW", lbl: "Capacité installée" },
          { num: "2030",   lbl: "Objectif 52% ENR" }
        ],
        sections: [
          {
            titre: "Textes clés",
            type: "liste",
            items: [
              "<strong>Loi 13-09</strong> (2010) — Loi fondatrice ENR. Ouvre la production privée aux IPPs.",
              "<strong>Loi 58-15</strong> (2016) — Accès tiers au réseau haute tension pour les IPPs.",
              "<strong>Loi 40-19</strong> (2022) — Efficacité énergétique + intégration ENR dans la planification urbaine."
            ]
          },
          {
            titre: "Acteurs clés",
            type: "tags",
            items: ["MASEN — Agence solaire", "ANRE — Régulateur", "ONEE — Réseau national"]
          },
          {
            titre: "Projet phare",
            type: "texte",
            contenu: "<strong>Noor Ouarzazate</strong> (580 MW CSP+PV) — Plus grande centrale solaire d'Afrique. Banque Mondiale + BAD + KfW + BEI. Financial close en 18 mois grâce au cadre MASEN."
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "kenya",
      drapeau: "🇰🇪",
      nom: "Kenya",
      badge: "Leader",
      region: "Afrique de l'Est",
      eri: 5,
      tags_carte: ["EPRA", "93% ENR"],
      modal: {
        eyebrow: "Fiche Pays · Afrique de l'Est",
        titre: "🇰🇪 Kenya",
        sous_titre: "ERI Score ★★★★★ — Meilleur régulateur ENR d'Afrique subsaharienne",
        stats: [
          { num: "93%",      lbl: "Électricité ENR" },
          { num: "3 192 MW", lbl: "Capacité installée" },
          { num: "13",       lbl: "Nouvelles réglementations 2024-25" }
        ],
        sections: [
          {
            titre: "Le modèle GDC — La leçon clé",
            type: "texte",
            contenu: "La <strong>Geothermal Development Company</strong> assume le risque de forage amont. Les IPPs privés construisent uniquement la centrale de conversion. Résultat : IRR 15%, financement en 18 mois. Ce modèle de dérisquage public-privé est transposable à toute l'Afrique."
          },
          {
            titre: "Réglementations 2024-2025",
            type: "liste",
            items: [
              "<strong>Energy Act 2019</strong> — Crée l'EPRA indépendant (PDG nommé par concours)",
              "<strong>Net-Metering Regulations 2024</strong> — Prosommateurs connectés au réseau",
              "<strong>Green Hydrogen Guidelines 2024</strong> — 1er cadre H2 vert d'Afrique",
              "<strong>Open Access Regulations 2024</strong> — Fin du monopole de distribution"
            ]
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "cdi",
      drapeau: "🇨🇮",
      nom: "Côte d'Ivoire",
      badge: "Hub régional",
      region: "Afrique de l'Ouest",
      eri: 4,
      tags_carte: ["CI-ÉNERGIES", "PPP actif"],
      modal: {
        eyebrow: "Fiche Pays · Afrique de l'Ouest",
        titre: "🇨🇮 Côte d'Ivoire",
        sous_titre: "ERI Score ★★★★☆ — Hub énergétique d'Afrique de l'Ouest francophone, exporte vers 5 pays voisins",
        stats: [
          { num: "2 500 MW", lbl: "Capacité installée" },
          { num: "45%",      lbl: "Objectif ENR 2030" },
          { num: "5 pays",   lbl: "Voisins alimentés" }
        ],
        sections: [
          {
            titre: "Avantage clé vs Sénégal",
            type: "texte",
            contenu: "La <strong>loi PPP 2016 s'applique à l'énergie</strong> — contrairement au Sénégal dont la loi PPP 2021 exclut l'énergie. Délais de négociation réduits de 50%. Modèles de contrats publiés et disponibles."
          },
          {
            titre: "Structure PPA de référence",
            type: "texte",
            contenu: "<strong>Triple protection</strong> : CI-ÉNERGIES (acheteur) + garantie souveraine État ivoirien + PRG IFC. Structure la plus bankable d'Afrique de l'Ouest francophone."
          },
          {
            titre: "Acteurs clés",
            type: "tags",
            items: ["CI-ÉNERGIES — Acheteur unique", "ANARE-CI — Régulateur", "Ministère des Mines"]
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "senegal",
      drapeau: "🇸🇳",
      nom: "Sénégal",
      badge: "En transition",
      region: "Afrique de l'Ouest",
      eri: 3,
      tags_carte: ["JETP 2,5Mds€", "CRSE"],
      modal: {
        eyebrow: "Fiche Pays · Afrique de l'Ouest",
        titre: "🇸🇳 Sénégal",
        sous_titre: "ERI Score ★★★☆☆ — Cadre juridique ENR le plus avancé d'Afrique de l'Ouest, mix encore à 70% thermique",
        stats: [
          { num: "30%",      lbl: "Part ENR actuelle" },
          { num: "40%",      lbl: "Objectif ENR 2030" },
          { num: "2,5 Mds€", lbl: "JETP engagé" }
        ],
        sections: [
          {
            titre: "Vide juridique central",
            type: "texte",
            contenu: "La <strong>loi PPP n°2021-23 exclut explicitement l'énergie</strong> de son champ d'application. Chaque projet ENR nécessite une documentation sur mesure → délais de 18-36 mois. Contrairement à la Côte d'Ivoire où la loi PPP s'applique à l'énergie."
          },
          {
            titre: "Signal Gas to Power 2024",
            type: "texte",
            contenu: "Champs GTA et Sangomar en production depuis 2024. Centrale gaz 300 MW mise en service août 2024. Tension directe avec l'objectif 40% ENR 2030. Paradoxe documenté : pays le plus avancé juridiquement, mix encore dominé par le thermique."
          },
          {
            titre: "Acteurs clés",
            type: "tags",
            items: ["SENELEC — Acheteur unique", "CRSE — Régulateur", "ANER — Agence ENR", "ASER — Électrification rurale"]
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "nigeria",
      drapeau: "🇳🇬",
      nom: "Nigeria",
      badge: "+ Grand marché",
      region: "Afrique de l'Ouest",
      eri: 3,
      tags_carte: ["NERC", "Réforme 2023"],
      modal: {
        eyebrow: "Fiche Pays · Afrique de l'Ouest",
        titre: "🇳🇬 Nigeria",
        sous_titre: "ERI Score ★★★☆☆ — Plus grand marché africain, 8 000 MW installés non dispatchés",
        stats: [
          { num: "12 500 MW", lbl: "Capacité installée" },
          { num: "4 500 MW",  lbl: "Réellement dispatchés" },
          { num: "85M",       lbl: "Sans électricité" }
        ],
        sections: [
          {
            titre: "La chaîne de non-paiement",
            type: "texte",
            contenu: "Les DISCOs privatisées en 2013 ne paient pas les GENCOs → les centrales ne sont pas entretenues → capacité disponible chute. Dette accumulée : <strong>>1,5 Md USD</strong>. Cercle vicieux documenté — vide juridique le plus coûteux d'Afrique."
          },
          {
            titre: "Electricity Act 2023 — Réforme clé",
            type: "liste",
            items: [
              "Les États fédérés peuvent créer leur propre cadre électrique indépendant",
              "Eligible Customer élargi : les industriels achètent directement aux GENCOs",
              "Mini-Grid Regulation 2022 : cadre le plus complet d'Afrique de l'Ouest"
            ]
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "cameroun",
      drapeau: "🇨🇲",
      nom: "Cameroun",
      badge: "Hydraulique",
      region: "Afrique Centrale",
      eri: 3,
      tags_carte: ["Nachtigal 420MW", "BOT"],
      modal: {
        eyebrow: "Fiche Pays · Afrique Centrale",
        titre: "🇨🇲 Cameroun",
        sous_titre: "ERI Score ★★★☆☆ — 23 000 MW de potentiel hydraulique, Nachtigal comme référence régionale",
        stats: [
          { num: "1 600 MW",   lbl: "Capacité installée" },
          { num: "23 000 MW",  lbl: "Potentiel hydraulique" },
          { num: "4%",         lbl: "Potentiel exploité" }
        ],
        sections: [
          {
            titre: "Nachtigal — Deal de référence",
            type: "texte",
            contenu: "<strong>420 MW · 1,5 Md USD · PPA 30 ans.</strong> EDF 40% + IFC 20% + État 10% + 5 prêteurs DFI (BEI + Proparco + BAD + BDEAC). Mis en service 2024. Manuel du financement hydraulique africain condensé en une transaction."
          },
          {
            titre: "⚠️ Risque 2026 à surveiller",
            type: "texte",
            contenu: "Concession ENEO (distributeur) <strong>expire en 2026</strong>. Renouvellement ou changement de concessionnaire — incertitude majeure pour tous les projets ENR connectés au réseau ENEO."
          },
          {
            titre: "Acteurs clés",
            type: "tags",
            items: ["EDC — Propriétaire barrages", "ENEO — Distribution", "ARSEL — Régulateur"]
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "guinee",
      drapeau: "🇬🇳",
      nom: "Guinée",
      badge: "Fort potentiel",
      region: "Afrique de l'Ouest",
      eri: 2,
      tags_carte: ["Souapiti 450MW", "Kaléta 240MW"],
      modal: {
        eyebrow: "Fiche Pays · Afrique de l'Ouest",
        titre: "🇬🇳 Guinée",
        sous_titre: "ERI Score ★★☆☆☆ — Plus grand potentiel hydraulique d'Afrique de l'Ouest. Aucune loi ENR dédiée.",
        stats: [
          { num: "1 310 MW", lbl: "Capacité installée" },
          { num: "62%",      lbl: "Part hydraulique" },
          { num: "6M",       lbl: "Sans électricité" }
        ],
        sections: [
          {
            titre: "Le vide juridique central",
            type: "texte",
            contenu: "<strong>Aucune loi ENR dédiée.</strong> Pas de régime de licence pour les IPPs solaires. Pas de tarif publié. Pas de PPA standardisé. Chaque projet = négociation de gré à gré avec le Ministère. Durée : 18-36 mois. C'est la raison principale pour laquelle les IPPs n'investissent pas malgré le potentiel exceptionnel."
          },
          {
            titre: "Pipeline non financé",
            type: "liste",
            items: [
              "Koukoutamba — 294 MW (étudié, non financé)",
              "Fomi — 90 MW (étudié, non financé)",
              "Kakara — 70 MW (étudié, non financé)",
              "Kogbédou-Frankonédou — 200 MW (en développement)"
            ]
          },
          {
            titre: "3 réformes juridiques prioritaires",
            type: "liste",
            items: [
              "Adopter une loi d'orientation ENR (modèle Sénégal 2010 ou Kenya 2019)",
              "Publier un modèle de PPA standardisé pour les projets 1-50 MW",
              "Renforcer l'ARSEE : budget dédié + personnel technique + modèle tarifaire publié"
            ]
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "rwanda",
      drapeau: "🇷🇼",
      nom: "Rwanda",
      badge: "Modèle rural",
      region: "Afrique de l'Est",
      eri: 4,
      tags_carte: ["70% électrif.", "Mini-réseaux"],
      modal: {
        eyebrow: "Fiche Pays · Afrique de l'Est",
        titre: "🇷🇼 Rwanda",
        sous_titre: "ERI Score ★★★★☆ — Modèle mondial d'électrification rurale, de 6% à 70% en 15 ans",
        stats: [
          { num: "70%",    lbl: "Taux électrification" },
          { num: "300 MW", lbl: "Capacité installée" },
          { num: "2024",   lbl: "Objectif 100%" }
        ],
        sections: [
          {
            titre: "La leçon unique — Compensation mini-réseaux",
            type: "texte",
            contenu: "Seul pays africain à avoir résolu le problème des mini-réseaux privés quand le réseau national arrive. <strong>Règle de compensation automatique</strong> : l'opérateur du réseau rachète les actifs à leur valeur nette comptable. 18 autres pays africains ont encore un silence juridique total sur ce point."
          },
          {
            titre: "Acteurs clés",
            type: "tags",
            items: ["RURA — Régulateur multi-sectoriel", "REG — Rwanda Energy Group", "EDCL — Électrification rurale"]
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "afrsud",
      drapeau: "🇿🇦",
      nom: "Afrique du Sud",
      badge: "REIPPPP",
      region: "Afrique Australe",
      eri: 4,
      tags_carte: ["REIPPPP", "JETP 8,5Mds$"],
      modal: {
        eyebrow: "Fiche Pays · Afrique Australe",
        titre: "🇿🇦 Afrique du Sud",
        sous_titre: "ERI Score ★★★★☆ — REIPPPP : les enchères ENR les plus compétitives du continent",
        stats: [
          { num: "60 GW",   lbl: "Capacité installée" },
          { num: "8,5 Mds$", lbl: "JETP engagé" },
          { num: "15 GW",   lbl: "Pipeline REIPPPP actif" }
        ],
        sections: [
          {
            titre: "Le REIPPPP — Modèle à suivre",
            type: "texte",
            contenu: "7 rounds complétés. Prix solaire &lt;0,04 USD/kWh — parmi les plus bas mondiaux. Programme d'appels d'offres ENR le plus mature d'Afrique. Entièrement reproductible dans d'autres pays africains."
          },
          {
            titre: "Enjeu 2026",
            type: "texte",
            contenu: "Restructuration d'Eskom (séparation production/transport/distribution) et JETP 8,5 Mds USD : les deux réformes structurelles les plus importantes du secteur électrique africain en cours."
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    },
    {
      id: "ghana",
      drapeau: "🇬🇭",
      nom: "Ghana",
      badge: "Anglophone",
      region: "Afrique de l'Ouest",
      eri: 3,
      tags_carte: ["RE Act 832", "PURC"],
      modal: {
        eyebrow: "Fiche Pays · Afrique de l'Ouest",
        titre: "🇬🇭 Ghana",
        sous_titre: "ERI Score ★★★☆☆ — Renewable Energy Act 832 (2011), marché ENR en développement",
        stats: [
          { num: "5 700 MW", lbl: "Capacité installée" },
          { num: "85%",      lbl: "Taux électrification" },
          { num: "10%",      lbl: "Part ENR (hors hydro)" }
        ],
        sections: [
          {
            titre: "Cadre réglementaire",
            type: "liste",
            items: [
              "<strong>Renewable Energy Act 832</strong> (2011) — Cadre ENR le plus complet d'Afrique de l'Ouest anglophone",
              "<strong>PURC</strong> — Régulateur tarifs et licences",
              "<strong>GRICOG</strong> — Gestionnaire du réseau (Grid Company of Ghana)",
              "<strong>GNPC</strong> — Pétrole et gaz (en transition vers ENR)"
            ]
          }
        ],
        cta: "Accéder à la fiche complète →"
      }
    }

    // ─────────────────────────────────────────────────────────
    // POUR AJOUTER UN NOUVEAU PAYS, copiez le bloc ci-dessous
    // et remplissez tous les champs :
    //
    // {
    //   id: "ethiopie",
    //   drapeau: "🇪🇹",
    //   nom: "Éthiopie",
    //   badge: "Hydraulique",
    //   region: "Afrique de l'Est",
    //   eri: 3,
    //   tags_carte: ["GERD 6 450MW", "EEP"],
    //   modal: {
    //     eyebrow: "Fiche Pays · Afrique de l'Est",
    //     titre: "🇪🇹 Éthiopie",
    //     sous_titre: "ERI Score ★★★☆☆ — ...",
    //     stats: [...],
    //     sections: [...],
    //     cta: "Accéder à la fiche complète →"
    //   }
    // }
    // ─────────────────────────────────────────────────────────
  ],

  // ── PROFILS UTILISATEURS ──────────────────────────────────
  profils: [
    {
      icon: "⚖️",
      titre: "Avocats & juristes ENR",
      texte: "Due diligence accélérée, cadres comparatifs multi-pays, accès aux textes consolidés et aux vides juridiques documentés."
    },
    {
      icon: "💼",
      titre: "Fonds & développeurs",
      texte: "Country risk reports, analyse de bankabilité réglementaire, mapping des acteurs et suivi du pipeline ENR africain."
    },
    {
      icon: "🏦",
      titre: "DFIs & institutions financières",
      texte: "Évaluation du cadre réglementaire avant décision d'investissement, suivi des réformes et des vides juridiques critiques."
    },
    {
      icon: "🏛️",
      titre: "Régulateurs & gouvernements",
      texte: "Benchmarking régional, analyse comparative des modèles réglementaires, meilleures pratiques transposables."
    }
  ],

  // ── FONDATEUR ─────────────────────────────────────────────
  fondateur: {
    initiales: "IK",
    nom: "Ibrahima Keïta",
    titre: "Juriste ENR Afrique · Fondateur LEXNRG",
    bio: "Originaire de Guinée, M1 Droit de l'environnement et développement durable à l'Université Mohammed V de Rabat. Chargé des affaires boursières à l'ASEGUIM. Certifié UNITAR économie verte et AFD transition énergétique. LEXNRG est né d'un constat simple : la Guinée a le plus grand potentiel hydraulique d'Afrique de l'Ouest et n'a toujours pas de loi ENR. Ce paradoxe n'est pas une fatalité — c'est un défi juridique.",
    badges: [
      "M1 Droit Environnement — UM5 Rabat",
      "UNITAR — Économie verte",
      "AFD — Transition énergétique",
      "ASEGUIM — Marchés financiers"
    ]
  },

  // ── RÉSEAUX SOCIAUX ───────────────────────────────────────
  // Pour changer un lien : modifiez uniquement l'url ici.
  social: [
    { label: "𝕏 @keitaEnergielaw", url: "https://x.com/keitaEnergielaw" },
    { label: "in LinkedIn",        url: "https://www.linkedin.com/in/ibrahima-keita-a53000257" },
    { label: "f Facebook",         url: "https://www.facebook.com/share/1AkMYLYmBT/" },
    { label: "✉ Contact",          url: "mailto:ibrakalilkeita365@gmail.com" }
  ]

};
