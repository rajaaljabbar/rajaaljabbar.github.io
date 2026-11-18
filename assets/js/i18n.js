(function () {
  "use strict";

  const DEFAULT_LANG = "en";
  const STORAGE_KEY = "pra-lang";

  const PAIRS = [

    ["Unduh CV", "Download CV"],
    ["Navigasi utama", "Main navigation"],
    ["Navigasi mobile", "Mobile navigation"],
    ["Buka/Tutup Menu", "Toggle Mobile Menu"],
    ["Bahasa", "Language"],
    ["Foto profil", "Profile photo"],

    ["Spesialis Infrastruktur IT dengan rekam jejak", "IT Infrastructure Specialist with a track record of"],
    ["7+ tahun", "7+ years"],
    [
      "dalam menjaga keandalan ekosistem teknologi enterprise. Memadukan keahlian networking (MikroTik, UniFi), virtualisasi (VMware), dan rekayasa perangkat lunak berbantuan AI untuk merancang sistem otomasi dan Manajemen Aset IT yang menjembatani kebutuhan teknis, kelancaran operasional antar-departemen, serta kepatuhan standar keamanan ISO 27001.",
      "in maintaining the reliability of enterprise technology ecosystems. Combining networking expertise (MikroTik, UniFi), virtualization (VMware), and AI-assisted software engineering to design automation systems and IT Asset Management that bridge technical needs, smooth cross-department operations, and ISO 27001 security compliance."
    ],
    ["Lihat Proyek", "View Projects"],
    ["Unduh CV (PDF)", "Download CV (PDF)"],

    ["7+ Tahun", "7+ Years"],

    ["Spesialisasi & Core Tech Stack", "Specialization & Core Tech Stack"],
    [
      "Infrastruktur tingkat enterprise, orkestrasi virtualisasi, dan ekosistem rekayasa web modern.",
      "Enterprise-grade infrastructure, virtualization orchestration, and a modern web engineering ecosystem."
    ],
    [
      "Arsitektur jaringan multi-site, routing kompleks, manajemen bandwidth, dan enkripsi wireless access terpusat.",
      "Multi-site network architecture, complex routing, bandwidth management, and centralized wireless access encryption."
    ],
    [
      "Konfigurasi hypervisor, isolasi container, manajemen storage, dan compliance infrastruktur hardware fisik.",
      "Hypervisor configuration, container isolation, storage management, and physical hardware infrastructure compliance."
    ],
    [
      "Pembangunan aplikasi internal terintegrasi, dynamic UI dashboard, arsitektur RESTful API, dan automasi script data menggunakan Agentic AI workflows.",
      "Building integrated internal applications, dynamic UI dashboards, RESTful API architecture, and data-script automation using AI workflows."
    ],
    [
      "Manajemen integritas relational database, real-time telemetry, sistem authentication, dan security governance.",
      "Relational database integrity management, real-time telemetry, authentication systems, and security governance."
    ],

    ["Proyek Unggulan & Arsitektur", "Featured Projects & Architecture"],
    [
      "Solusi nyata infrastruktur enterprise, otomatisasi jaringan, dan sistem internal berskala produksi.",
      "Real-world enterprise infrastructure solutions, network automation, and production-scale internal systems."
    ],
    ["Detail Arsitektur (STAR)", "Architecture Details (STAR)"],
    ["RTO < 15 Menit", "RTO < 15 Minutes"],
    [
      "Autentikasi WPA2-Enterprise terpusat dengan server FreeRADIUS in-house (terintegrasi PostgreSQL), segregasi traffic via VLAN, captive portal kustom, dan failover otomatis Netwatch untuk 12+ UniFi AP.",
      "Centralized WPA2-Enterprise authentication with an in-house FreeRADIUS server (PostgreSQL-integrated), VLAN traffic segregation, a custom captive portal, and Netwatch automatic failover for 12+ UniFi APs."
    ],
    [
      "Aplikasi full-stack terpusat untuk pelacakan inventaris aset IT dan modul ticketing helpdesk, dikembangkan dengan Agentic AI workflows dan dijalankan di server virtual VMware ESXi internal.",
      "Centralized full-stack application for IT asset inventory tracking and a helpdesk ticketing module, built with Agentic AI workflows and running on an internal VMware ESXi virtual server."
    ],
    [
      "Implementasi tunneling IPsec Site-to-Site VPN antar Head Office dan kantor cabang di atas MikroTik RB1100AHx4 dengan Dual-WAN Auto Failover dan manajemen bandwidth PCQ.",
      "IPsec Site-to-Site VPN tunneling between the Head Office and branch offices on a MikroTik RB1100AHx4, with Dual-WAN Auto Failover and PCQ bandwidth management."
    ],
    [
      "Konsolidasi beban kerja ke mesin virtual VMware ESXi di atas HPE ProLiant DL380p Gen 8, dengan shared storage NAS dan skrip pencadangan otomatis untuk memenuhi dokumentasi dan kepatuhan ISO 27001.",
      "Workload consolidation onto VMware ESXi virtual machines on an HPE ProLiant DL380p Gen 8, with NAS shared storage and automated backup scripts to meet ISO 27001 documentation and compliance requirements."
    ],
    [
      "Konfigurasi controller Novastar dan routing matriks video untuk display LED beresolusi tinggi di ruang meeting eksekutif (BOD) dan NOC klien korporat, termasuk Petrosea, Telkomsel, dan Smartfren.",
      "Novastar controller configuration and video matrix routing for high-resolution LED displays in the executive meeting rooms (BOD) and NOCs of corporate clients, including Petrosea, Telkomsel, and Smartfren."
    ],
    ["Mass IT Deployment & Educational Lab Infrastructure (Proyek Nganjuk)", "Mass IT Deployment & Educational Lab Infrastructure (Nganjuk Project)"],
    [
      "Deployment massal 100+ laptop, cloning OS & aplikasi ujian, serta instalasi jaringan lokal laboratorium komputer di beberapa titik SMP Kabupaten Nganjuk untuk pelaksanaan Ujian Nasional.",
      "Mass deployment of 100+ laptops, OS & exam application cloning, and local network installation for computer labs at several junior high school sites in Nganjuk Regency for the National Exams."
    ],
    [
      "Diagram rak jaringan enterprise MikroTik, switch UniFi, dan access point nirkabel",
      "Enterprise network rack diagram with MikroTik, UniFi switches, and wireless access points"
    ],
    [
      "Dashboard web aplikasi IT asset inventory, grafik status tiket, dan kartu kesehatan server",
      "IT asset inventory web application dashboard with ticket status charts and server health cards"
    ],
    [
      "Arsitektur routing MikroTik RB1100AHx4, IPsec Site-to-Site VPN, dan Dual-WAN Auto Failover",
      "MikroTik RB1100AHx4 routing architecture, IPsec Site-to-Site VPN, and Dual-WAN Auto Failover"
    ],
    [
      "Ruang server dengan node hypervisor VMware ESXi dan dashboard Grafana uptime",
      "Server room with VMware ESXi hypervisor nodes and a Grafana uptime dashboard"
    ],
    [
      "Ruang kontrol event dengan Novastar video wall controller dan matrix video switcher",
      "Event control room with a Novastar video wall controller and matrix video switcher"
    ],
    [
      "Deployment massal laptop dan infrastruktur jaringan laboratorium komputer ujian nasional di Nganjuk",
      "Mass laptop deployment and network infrastructure for national exam computer labs in Nganjuk"
    ],

    ["Riwayat Karier & Pengalaman Kerja", "Career History & Work Experience"],
    [
      "Lintasan dukungan infrastruktur, tata kelola aset IT, pabrik manufaktur, dan multimedia.",
      "A journey through infrastructure support, IT asset governance, manufacturing plants, and multimedia."
    ],
    ["Mei 2022 – Sekarang", "May 2022 – Present"],
    ["Jan 2022 – Mei 2022", "Jan 2022 – May 2022"],
    ["Mei 2021 – Des 2021", "May 2021 – Dec 2021"],
    ["Jul 2019 – Mei 2021", "Jul 2019 – May 2021"],
    [
      "Memberikan technical support cepat untuk 200+ end-user di berbagai cabang, menyelesaikan 50+ tiket per bulan dengan 98% SLA compliance dan tingkat kepuasan user.",
      "Delivered prompt technical support for 200+ end-users across multiple branches, resolving 50+ monthly tickets with a 98% SLA compliance and user satisfaction rate."
    ],
    [
      "Mengembangkan dan men-deploy aplikasi custom containerized IT Asset Management (ITAM) dan NOC dashboard menggunakan Node.js, PostgreSQL, dan Docker.",
      "Developed and deployed a custom containerized IT Asset Management (ITAM) application and NOC dashboard utilizing Node.js, PostgreSQL, and Docker."
    ],
    [
      "Mengelola server infrastructure (VMware ESXi, Windows Server) dan memperkuat network security melalui MikroTik IPsec VPN, selaras dengan standar compliance ISO 27001.",
      "Administered server infrastructure (VMware ESXi, Windows Server) and strengthened network security via MikroTik IPsec VPN, aligning with ISO 27001 compliance standards."
    ],
    [
      "Memberikan technical support harian yang responsif bagi end-user internal untuk memastikan operasional bisnis berjalan lancar tanpa gangguan.",
      "Provided responsive daily technical support to internal end-users, ensuring smooth and uninterrupted business operations."
    ],
    [
      "Mengeksekusi deployment 30+ perangkat IT dan display infrastructure khusus dalam deadline proyek yang ketat.",
      "Executed the deployment of 30+ IT devices and specialized display infrastructure within tight project deadlines."
    ],
    [
      "Menjaga 100% operational uptime sistem corporate LED Display selama event krusial untuk klien enterprise besar, termasuk Petrosea, Telkomsel, dan Smartfren.",
      "Maintained 100% operational uptime for corporate LED Display systems during critical events for major enterprise clients, including Petrosea, Telkomsel, and Smartfren."
    ],
    [
      "Mengurangi operational downtime di lingkungan industri berat (Factory 1 & 3, JIEP) dengan menangani gangguan hardware dan network dengan rata-rata response time di bawah 30 menit.",
      "Reduced operational downtime in heavy industrial environments (Factory 1 & 3, JIEP) by resolving hardware and network faults with an average response time of under 30 minutes."
    ],
    [
      "Melakukan deployment operating system dan memelihara local network infrastructure untuk menjamin operasional lini produksi tanpa gangguan.",
      "Deployed operating systems and maintained local network infrastructure to ensure uninterrupted production line operations."
    ],
    [
      "Mencatat 100% technical incident ke dalam ticketing management system untuk membangun internal knowledge base yang andal bagi isu IT pabrik yang berulang.",
      "Logged 100% of technical incidents into the ticketing management system to build a reliable internal knowledge base for recurrent factory IT issues."
    ],
    [
      "Memberikan technical support harian yang komprehensif untuk staf korporat, mencakup laptop provisioning, konfigurasi OS, dan troubleshooting.",
      "Delivered comprehensive daily technical support for corporate staff, managing laptop provisioning, OS configuration, and troubleshooting."
    ],
    [
      "Menjaga 99% internal server dan network uptime secara proaktif melalui routine health check dan preventive maintenance.",
      "Maintained 99% internal server and network uptime by proactively conducting routine health checks and preventive maintenance."
    ],
    [
      "Memimpin mass deployment dan instalasi jaringan 100+ laptop untuk laboratorium pendidikan di Kabupaten Nganjuk, tuntas 100% on-schedule untuk Ujian Nasional.",
      "Led the mass deployment and network installation of 100+ laptops for educational laboratories in Nganjuk Regency, completing the project 100% on schedule for national exams."
    ],

    ["Hubungi Saya", "Contact Me"],
    [
      "Terbuka untuk posisi full-time IT Support, IT Infrastructure Specialist, Network Engineer, Sysadmin, maupun proyek arsitektur jaringan & web custom.",
      "Open to full-time IT Support, IT Infrastructure Specialist, Network Engineer, and Sysadmin positions, as well as custom network architecture & web projects."
    ],
    ["Salin", "Copy"],
    ["Tersalin!", "Copied!"],
    ["Salin Email", "Copy Email"],
    ["NAMA LENGKAP *", "FULL NAME *"],
    ["EMAIL PERUSAHAAN *", "COMPANY EMAIL *"],
    ["KEBUTUHAN / SUBJEK DISKUSI *", "NEEDS / DISCUSSION SUBJECT *"],
    ["PESAN / RINGKASAN KEBUTUHAN *", "MESSAGE / REQUIREMENTS SUMMARY *"],
    ["Konsultasi Jaringan Multi-Site / FreeRADIUS Wi-Fi", "Multi-Site Network / FreeRADIUS Wi-Fi Consulting"],
    ["Pembuatan Web App Internal (React & Node.js)", "Internal Web App Development (React & Node.js)"],
    ["Peluang Kolaborasi Lainnya", "Other Collaboration Opportunities"],
    [
      "Deskripsikan kebutuhan teknis, arsitektur, atau tawaran posisi Anda...",
      "Describe your technical needs, architecture, or position offer..."
    ],
    ["✓ Membuka aplikasi email Anda untuk mengirim pesan…", "✓ Opening your email app to send the message…"],
    ["✓ Pesan berhasil dikirim! Saya akan segera membalas ke email Anda.", "✓ Message transmitted successfully! I will reply to your email shortly."],
    ["Mengirim...", "Sending..."],
    ["Kirim via Terminal", "Send via Terminal"],

    ["Tutup Terminal", "Close Terminal"],
    ["Tutup", "Close"],
    ["Akses Repository GitHub", "Access GitHub Repository"],
    ["// ARSITEKTUR KOMPONEN", "// COMPONENT ARCHITECTURE"],
    ["// ARSITEKTUR JARINGAN & AUTENTIKASI", "// NETWORK & AUTHENTICATION ARCHITECTURE"],
    ["// DIAGRAM SKEMATIK CLUSTER", "// CLUSTER SCHEMATIC DIAGRAM"],
    ["// SKEMA DISTRIBUSI BROADCAST", "// BROADCAST DISTRIBUTION SCHEME"],
    ["// ARSITEKTUR ROUTING & IPSEC TUNNELING", "// ROUTING & IPSEC TUNNELING ARCHITECTURE"],
    ["// ARSITEKTUR LAB & MASS DEPLOYMENT", "// LAB & MASS DEPLOYMENT ARCHITECTURE"],
    ["• SLA 99.95% Terjaga", "• 99.95% SLA Maintained"],
    ["• Keamanan Jaringan Terpusat", "• Centralized Network Security"],
    ["Enterprise Wi-Fi & Multi-SSID dengan FreeRADIUS & UniFi", "Enterprise Wi-Fi & Multi-SSID with FreeRADIUS & UniFi"],

    [
      "Pencatatan inventaris aset IT perusahaan sebelumnya dilakukan secara manual, menyebabkan kendala pelacakan saat audit internal dan keterlambatan dalam merespons tiket keluhan pengguna.",
      "Recording of the company's IT asset inventory was previously done manually, causing tracking difficulties during internal audits and delays in responding to user complaint tickets."
    ],
    [
      "Mengembangkan aplikasi internal full-stack terpusat yang mengintegrasikan pelacakan perangkat dan modul ticketing helpdesk.",
      "Develop a centralized full-stack internal application that integrates device tracking and a helpdesk ticketing module."
    ],
    [
      "Merancang arsitektur aplikasi (React, Node.js, PostgreSQL) dan mempercepat siklus pengembangan sistem production-ready menggunakan Agentic AI workflows. Mengorkestrasi integrasi backend dan melakukan deployment menggunakan Docker di lingkungan server virtual VMware ESXi internal.",
      "Designed the application architecture (React, Node.js, PostgreSQL) and accelerated the production-ready development cycle using Agentic AI workflows. Orchestrated backend integration and deployed with Docker in an internal VMware ESXi virtual server environment."
    ],
    [
      "Sistem berhasil merampingkan pelacakan seluruh aset IT korporat, mempercepat respons penanganan tiket keluhan secara signifikan, dan menyatukan riwayat perangkat dalam satu dasbor yang sejalan dengan operasi departemen GA.",
      "The system streamlined tracking of all corporate IT assets, significantly accelerated complaint ticket response, and unified device history in a single dashboard aligned with the General Affairs (GA) department's operations."
    ],

    [
      "Terdapat kebutuhan mendesak untuk meningkatkan keamanan perimeter jaringan perusahaan, mengatasi kerentanan akses statis, dan memulihkan stabilitas jaringan pasca insiden keamanan.",
      "There was an urgent need to improve the company's network perimeter security, address static-access vulnerabilities, and restore network stability after a security incident."
    ],
    [
      "Mengimplementasikan sistem autentikasi WPA2-Enterprise terpusat, memisahkan traffic melalui VLAN, dan merancang sistem captive portal kustom.",
      "Implement centralized WPA2-Enterprise authentication, segregate traffic through VLANs, and design a custom captive portal system."
    ],
    [
      "Membangun server autentikasi in-house FreeRADIUS di Linux yang terintegrasi dengan PostgreSQL dan router utama MikroTik RB1100AHx4. Mengimplementasikan skrip otomatisasi failover Netwatch untuk menjaga konektivitas nirkabel 12+ unit UniFi AP.",
      "Built an in-house FreeRADIUS authentication server on Linux, integrated with PostgreSQL and the MikroTik RB1100AHx4 main router. Implemented Netwatch failover automation scripts to keep wireless connectivity running across 12+ UniFi AP units."
    ],
    [
      "Keamanan jaringan nirkabel mencapai standar perbankan tanpa celah kebocoran VLAN, pencabutan akun karyawan keluar dapat dilakukan instan, dan pemulihan jaringan (failover) berjalan otomatis.",
      "Wireless network security reached banking-grade standards with no VLAN leakage, departing employees' accounts can be revoked instantly, and network recovery (failover) runs automatically."
    ],

    [
      "Kebutuhan infrastruktur server yang tangguh untuk menjalankan berbagai layanan krusial tanpa bergantung pada satu mesin bare-metal individual yang rentan jika terjadi kerusakan perangkat keras.",
      "A resilient server infrastructure was needed to run several critical services without depending on a single bare-metal machine that is vulnerable to hardware failure."
    ],
    [
      "Mengkonsolidasikan beban kerja ke dalam mesin virtual (VM) berskala enterprise dan merancang arsitektur penyimpanan yang mendukung kepatuhan keamanan tinggi.",
      "Consolidate workloads into enterprise-scale virtual machines (VMs) and design a storage architecture that supports high security compliance."
    ],
    [
      "Melakukan deployment hypervisor VMware ESXi pada server fisik HPE ProLiant DL380p Gen 8. Menyiapkan topologi shared storage (NAS) dan skrip pencadangan otomatis untuk memenuhi standar dokumentasi dan kepatuhan ISO 27001.",
      "Deployed the VMware ESXi hypervisor on a physical HPE ProLiant DL380p Gen 8 server. Set up a shared storage (NAS) topology and automated backup scripts to meet ISO 27001 documentation and compliance standards."
    ],
    [
      "Tercapai isolasi sistem yang aman, optimalisasi konsumsi daya pusat data, dan uptime operasional yang tinggi (99.95%) dengan waktu pemulihan (RTO) di bawah 15 menit.",
      "Achieved secure system isolation, optimized data center power consumption, and high operational uptime (99.95%) with a recovery time objective (RTO) under 15 minutes."
    ],

    [
      "Klien korporat besar membutuhkan implementasi sistem display LED berskala raksasa beresolusi tinggi untuk fasilitas krusial seperti ruang meeting eksekutif (BOD) dan Network Operations Center (NOC) yang menuntut pemantauan data real-time.",
      "A large corporate client required a large-scale, high-resolution LED display system for critical facilities such as executive meeting rooms (BOD) and a Network Operations Center (NOC) that demands real-time data monitoring."
    ],
    [
      "Menyediakan dukungan teknis, persiapan sistem, dan memastikan arsitektur distribusi visual berjalan mulus untuk kebutuhan presentasi manajemen tingkat tinggi dan monitoring dashboard operasional.",
      "Provide technical support and system preparation, and ensure the visual distribution architecture runs smoothly for senior-management presentations and operational dashboard monitoring."
    ],
    [
      "Terlibat langsung dalam konfigurasi perangkat controller (Novastar), routing matriks video, dan menjaga stabilitas sistem LED selama masa implementasi proyek untuk klien berskala nasional termasuk Petrosea, Telkomsel, dan Smartfren.",
      "Directly involved in configuring the controller devices (Novastar) and video matrix routing, and in keeping the LED system stable throughout the implementation of projects for national-scale clients including Petrosea, Telkomsel, and Smartfren."
    ],
    [
      "Sistem layar LED beroperasi dengan stabil, latensi sangat rendah, dan nol blackout, memastikan kelancaran pemantauan jaringan terpusat dan transisi presentasi visual eksekutif tanpa kendala.",
      "The LED screen systems ran stably with very low latency and zero blackouts, ensuring smooth centralized network monitoring and seamless executive presentation transitions."
    ],

    [
      "Operasional perusahaan membutuhkan akses data yang aman antar Head Office dan kantor cabang, namun konektivitas sering terganggu akibat putusnya salah satu jalur internet dari ISP (Single Point of Failure).",
      "Company operations required secure data access between the Head Office and branch offices, but connectivity was often disrupted when one of the ISP internet links went down (a Single Point of Failure)."
    ],
    [
      "Membangun jalur komunikasi data internal yang aman (encrypted) antar lokasi dan memastikan operasional jaringan perusahaan tidak mengalami downtime saat ISP utama bermasalah.",
      "Build a secure (encrypted) internal data communication path between locations and ensure the company network suffers no downtime when the primary ISP has problems."
    ],
    [
      "Mengonfigurasi router enterprise MikroTik RB1100AHx4 dengan menerapkan tunneling IPsec Site-to-Site VPN untuk keamanan data, mengatur sistem Dual-WAN Failover untuk perpindahan internet otomatis, serta mengimplementasikan PCQ (Per Connection Queue) agar distribusi bandwidth merata di jam sibuk.",
      "Configured the MikroTik RB1100AHx4 enterprise router with IPsec Site-to-Site VPN tunneling for data security, set up a Dual-WAN Failover system for automatic internet switchover, and implemented PCQ (Per Connection Queue) to distribute bandwidth evenly during peak hours."
    ],
    [
      "Terciptanya jalur komunikasi internal lintas cabang yang aman dan stabil. Waktu downtime operasional berkurang drastis berkat sistem failover yang berjalan otomatis tanpa intervensi manual.",
      "A secure and stable cross-branch internal communication path was established. Operational downtime dropped drastically thanks to a failover system that runs automatically without manual intervention."
    ],

    [
      "Laboratorium komputer di beberapa titik SMP Kabupaten Nganjuk harus segera beroperasi dengan infrastruktur IT yang memenuhi standar kelayakan untuk pelaksanaan Ujian Nasional berskala besar dalam tenggat waktu yang sangat ketat.",
      "Computer labs at several junior high school (SMP) sites in Nganjuk Regency had to become operational quickly, with IT infrastructure meeting the readiness standard for large-scale National Exams under a very tight deadline."
    ],
    [
      "Merancang topologi jaringan lokal yang stabil, mendistribusikan perangkat, dan melakukan instalasi lebih dari 100 laptop beserta software ujian di berbagai lokasi secara serentak.",
      "Design a stable local network topology, distribute devices, and install more than 100 laptops along with exam software across multiple locations simultaneously."
    ],
    [
      "Memimpin tim untuk melakukan eksekusi instalasi kabel jaringan lokal, melakukan cloning/imaging OS dan aplikasi secara massal ke 100+ perangkat, mengonfigurasi IP address dan keamanan dasar jaringan, serta melakukan stress test konektivitas antara laptop klien dan server lokal ujian.",
      "Led the team in executing local network cabling, performed mass OS and application cloning/imaging to 100+ devices, configured IP addresses and basic network security, and ran connectivity stress tests between the client laptops and the local exam server."
    ],
    [
      "Proyek instalasi perangkat keras dan jaringan selesai 100% tepat waktu sesuai jadwal proyek (on-schedule). Seluruh laboratorium berfungsi optimal tanpa insiden putus koneksi jaringan selama masa Ujian Nasional berlangsung.",
      "The hardware and network installation project was completed 100% on schedule. All laboratories functioned optimally with no network disconnection incidents throughout the National Exam period."
    ],

    [
      "Portfolio Putra Raja Aljabbar — IT Infrastructure Specialist & AI-Augmented Builder (Bogor - Jakarta) dengan 7+ tahun pengalaman networking, virtualisasi, dan kepatuhan ISO 27001.",
      "Portfolio of Putra Raja Aljabbar — IT Infrastructure Specialist & AI-Augmented Builder (Bogor - Jakarta) with 7+ years of experience in networking, virtualization, and ISO 27001 compliance."
    ]
  ];

  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const toEn = new Map();
  const toId = new Map();
  PAIRS.forEach(([id, en]) => {
    toEn.set(norm(id), en);
    toId.set(norm(en), id);
  });

  function translate(text, lang) {
    const core = norm(text);
    if (!core) return text;
    const dict = lang === "en" ? toEn : toId;
    const hit = dict.get(core);
    if (hit === undefined || hit === core) return text;
    const lead = text.match(/^\s*/)[0];
    const trail = text.match(/\s*$/)[0];
    return lead + hit + trail;
  }

  const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "PRE", "NOSCRIPT", "TEXTAREA"]);
  const ATTRS = ["alt", "aria-label", "placeholder", "title"];

  function readLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "id") return saved;
    } catch (e) {  }
    return DEFAULT_LANG;
  }

  let current = readLang();

  function applyTextNodes(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentNode;
        if (!p || SKIP_TAGS.has(p.nodeName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      const next = translate(n.nodeValue, lang);
      if (next !== n.nodeValue) n.nodeValue = next;
    });
  }

  function applyAttributes(lang) {
    ATTRS.forEach((attr) => {
      document.querySelectorAll("[" + attr + "]").forEach((el) => {
        const v = el.getAttribute(attr);
        const next = translate(v, lang);
        if (next !== v) el.setAttribute(attr, next);
      });
    });
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", translate(desc.getAttribute("content"), lang));
  }

  function updateToggles(lang) {
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      const active = btn.dataset.langToggle === lang;
      btn.setAttribute("aria-pressed", String(active));
      btn.classList.toggle("bg-cyan-600", active);
      btn.classList.toggle("text-white", active);
      btn.classList.toggle("shadow-sm", active);
      btn.classList.toggle("text-slate-600", !active);
      btn.classList.toggle("hover:text-slate-900", !active);
    });
  }

  function apply(lang) {
    current = lang;
    document.documentElement.setAttribute("lang", lang);
    applyTextNodes(lang);
    applyAttributes(lang);
    updateToggles(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "id") return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {  }
    apply(lang);
  }

  function tr(text) {
    return translate(text, current);
  }

  window.PRA_I18N = {
    get lang() { return current; },
    set: setLang,
    tr
  };

  function init() {
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.langToggle));
    });
    apply(current);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
