import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Building, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import heroImage from '../assets/images/Useable_Images/image12.jpg';

// Import client logos
import naocLogo from '../assets/clients/naoc_logo.jpg';
import addaxLogo from '../assets/clients/addax_logo.jpg';
import chevronLogo from '../assets/clients/chevron_logo.jpg';
import totalLogo from '../assets/clients/total_logo.png';
import oilservLogo from '../assets/clients/oilserv_logo.png';
import seepcoLogo from '../assets/clients/seepco_logo.png';
import nestoilLogo from '../assets/clients/nestoil_logo.jpg';
import erotonLogo from '../assets/clients/eroton_logo.jpg';
import oesLogo from '../assets/clients/oes_logo.jpg';
import enageedLogo from '../assets/clients/enageed_logo.jpg';
import orientalEnergyLogo from '../assets/clients/orientalenergy_logo.png';
import egbinLogo from '../assets/clients/egbin_logo.jpg';
import nddcLogo from '../assets/clients/nddc_logo.jpg';
import nigerianGasLogo from '../assets/clients/nigerian-gas_logo.jpg';
import saipemLogo from '../assets/clients/saipem.png';
import seplatLogo from '../assets/clients/seplat_logo.png';
import tenarisLogo from '../assets/clients/Tenaris_Logo.png';
import xwaveLogo from '../assets/clients/xwave_logo.png';
import platformLogo from '../assets/clients/platform_logo.png';
import marathonOilLogo from '../assets/clients/marathon-oil_logo.jpg';
import moniPuloLogo from '../assets/clients/moni_pulo_logo.jpg';
import nigerDeltaLogo from '../assets/clients/niger-delta_logo.jpg';
import heoslLogo from '../assets/clients/heosl_logo.jpg';
import juliusBergerLogo from '../assets/clients/julius-berger_logo.jpg';
import afrenLogo from '../assets/clients/afren_logo.jpg';
import amniLogo from '../assets/clients/amni_logo.jpg';
import belemaOilLogo from '../assets/clients/belemaoil_logo.jpg';
import eglngLogo from '../assets/clients/eglng_logo.jpg';
import exxonLogo from '../assets/clients/exxon_logo.jpg';
import forteOilLogo from '../assets/clients/forteoil_logo.jpg';
import energiaLogo from '../assets/clients/energia_logo.jpg';
import heirsOilGasLogo from '../assets/clients/heirs_oil_and_gas_logo.jpeg';
import rinaLogo from '../assets/clients/rina.png';
import dangoteLogo from '../assets/clients/Dangote_Group_Logo.svg.png';
import shellNigeriaLogo from '../assets/clients/Shell_nigeria.png';
import starzsLogo from '../assets/clients/starzs.png';
import nlngLogo from '../assets/clients/nlng.png';
import npdcLogo from '../assets/clients/npdc.jpg';

/**
 * Projects Page Component
 * Displays all company projects organized by client/company with search and filter functionality
 */
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState('All');
  const [expandedClients, setExpandedClients] = useState(new Set());

  // Client logos mapping
  const clientLogos = {
    'NAOC': naocLogo,
    'ADDAX': addaxLogo,
    'CHEVRON': chevronLogo,
    'TOTAL': totalLogo,
    'OILSERV': oilservLogo,
    'STERLING GROUP (SEEPCO)': seepcoLogo,
    'NESTOIL': nestoilLogo,
    'EROTON': erotonLogo,
    'OES ENERGY': oesLogo,
    'ENAGEED': enageedLogo,
    'ORIENTAL ENERGY': orientalEnergyLogo,
    'EGBIN POWER PLC': egbinLogo,
    'NDDC': nddcLogo,
    'NGC': nigerianGasLogo,
    'SAIPEM': saipemLogo,
    'SEPLAT': seplatLogo,
    'TENARIS': tenarisLogo,
    'XWAVE': xwaveLogo,
    'PLATFORM': platformLogo,
    'MARATHON OIL': marathonOilLogo,
    'MONI PULO': moniPuloLogo,
    'NIGER DELTA': nigerDeltaLogo,
    'HEOSL': heoslLogo,
    'JULIUS BERGER': juliusBergerLogo,
    'AFREN': afrenLogo,
    'AMNI': amniLogo,
    'BELEMA OIL': belemaOilLogo,
    'EGLNG': eglngLogo,
    'EXXON': exxonLogo,
    'FORTE OIL': forteOilLogo,
    'ENERGIA': energiaLogo,
    'HEIRS OIL AND GAS': heirsOilGasLogo,
    'RINA': rinaLogo,
    'DANGOTE': dangoteLogo,
    'SPDC': shellNigeriaLogo,
    'STARZS INVESTMENTS COMPANY LIMITED': starzsLogo,
    'NLNG': nlngLogo,
    'WAV': xwaveLogo,
    'NPDC': npdcLogo
  };

  // Project data organized by client
  const projectsData = [
    { id: 1, description: "PROVISION OF FLOWLINE DELIVERY LINES AND ONPLOT PIPING INSPECTION FOR HHOG FACILITIES (OYIGBO NODE)", client: "HEIRS OIL AND GAS" },
    { id: 2, description: "STATUTORY INSPECTION OF VESSELS", client: "NAOC" },
    { id: 3, description: "STATUTORY INSPECTION OF PRESSURES VESSELS", client: "NAOC" },
    { id: 4, description: "AIR COOLING SERVICES", client: "NAOC" },
    { id: 5, description: "REVAMPING OF PH BASE PARIMETER FENCE", client: "NAOC" },
    { id: 6, description: "NON-DESTRUCTIVE INSPECTION AND FITNESS FOR SERVICE OF NAOC PRODUCTION FACILITIES", client: "NAOC" },
    { id: 7, description: "WELLHEAD MAINTENANCE", client: "HEIRS OIL AND GAS" },
    { id: 8, description: "INTELLIGENT PIGGING INSPECTION PROJECT ON 6″ X 23KM Crude line & 6″ x 28km Gas line.", client: "UNIVERSAL ENERGY" },
    { id: 9, description: "COATING DEFECT SURVEY (DCVG) and SOIL RESISTIVITY TEST", client: "RINA" },
    { id: 10, description: "PROVISION OF SCAFFOLDS FOR LAND & SWAMP AREAS", client: "NAOC" },
    { id: 11, description: "PROVISION OF ELECTRIC LINE THROUGH TUBING SAND CLEAN OUT SERVICES", client: "CHEVRON" },
    { id: 12, description: "SUPPLY AND INSTALLATION OF COAL LAB EQUIPMENT", client: "DANGOTE" },
    { id: 13, description: "LEASE OF FIRE TRUCKS", client: "NAOC" },
    { id: 14, description: "PROVISION OF WELLHEAD MAINTENANCE SERVICES", client: "ADDAX" },
    { id: 15, description: "PROVISION OF MANPOWER SUPPLY SERVICES", client: "ADDAX" },
    { id: 16, description: "PROVISION OF LOCAL TECHNICAL ASSISTANT SERVICES", client: "TOTAL" },
    { id: 17, description: "PROVISION OF LOCAL TECHNICAL ASSISTANT SERVICES", client: "TOTAL" },
    { id: 18, description: "STATUTORY SHUTDOWN MAINTENANCE OF AGBARA", client: "NAOC/NPDC" },
    { id: 19, description: "PROVISION OF BROWNFIELD MAINTENANCE ENGINEERING SERVICES", client: "SPDC" },
    { id: 20, description: "SAR ONLINE LEAK SEALING & COMPOSITE REPAIR", client: "NAOC" },
    { id: 21, description: "AKRI F/S FIRE - WATER NETWORK REVAMPING", client: "NAOC" },
    { id: 22, description: "ENGINEERING MEASUREMENT & EVALUATION FOR EMERGENCY REPAIRS OF FAILED & UNMOTORABLE SECTIONS OF AMAIGBO (LOT3) IN IMO STATE", client: "NDDC" },
    { id: 23, description: "ENGINEERING MEASUREMENT & EVALUATION FOR UNMOTORABLE SECTION OF ST.BENEDICT CATHOLIC CHURCH ROAD, IN ISIALZA NGWA, ABIA STATE", client: "NDDC" },
    { id: 24, description: "CATHODIC PROTECTION DESIGN FOR EROTON IFD INTERCONNECTING PIPELINE PROJECT", client: "OILSERV" },
    { id: 25, description: "ILI OF 36\" RUMUJI - BONNY GAS LINE 2 & 3", client: "NAOC" },
    { id: 26, description: "SUPPLY OF INSTRUMENTATION CABLE", client: "NLNG" },
    { id: 27, description: "CALIBRATION AND CERTIFICATION OF TENTION METER'S", client: "WAV" },
    { id: 28, description: "CALIBRATION AND CERTIFICATION OF TENTION METER'S", client: "WAV" },
    { id: 29, description: "SUPPLY OF LIFTING BELTS AND SLING WIRE GEARS FOR AKK PROJECT", client: "OILSERV" },
    { id: 30, description: "CALIBRATION OF FLOW METER's", client: "STARZS INVESTMENTS COMPANY LIMITED" },
    { id: 31, description: "EMERGENCY PROVISION OF WELDNECK FLANGES, MECHANICAL MODIFICATION AND INSTALLATION ON PIG RECEIVER", client: "NGC" },
    { id: 32, description: "UTM, MPI AND LOAD TEST", client: "BOUNCE ENGINEERING NIGERIA LTD" },
    { id: 33, description: "REMOVAL OF BUNKERING POINTS LAR", client: "NAOC" },
    { id: 34, description: "SUPPLY OF INSTRUMENTATION LUGS FOR ALL FS", client: "STERLING GROUP (SEEPCO)" },
    { id: 35, description: "PROCUREMENT OF A BRANDED EGA MASTER, MECHANICAL, ELECTRICAL/INSTRUMENTATION TOOLBOXES OREDO FLOWSTATION EPF1,2,3", client: "NPDC" },
    { id: 36, description: "INSPECTION SURVEY PIPELINE FROM WELLHEAD TO THE PRODUCTION FACILITY", client: "PETROBASE" },
    { id: 37, description: "TANK CALIBRATION DBs AGO", client: "TOG SHIPPING & OFFSHORE" },
    { id: 38, description: "FACILITY INTEGRITY CHECK AND TURNAROUND MAINTENANCE SERVICES ON OKI-OZIENGBE UNIT AREA", client: "ENAGEED" },
    { id: 39, description: "GWT ASSESTMENT OF 24 Inch OGB OB-OB Line", client: "NAOC" },
    { id: 40, description: "SUPPLY OF PRODUCTION LUBRICANTS & CHEMICAL", client: "HERITAGE" },
    { id: 41, description: "UTM/LEAK TEST", client: "ORIENTAL ENERGY" },
    { id: 42, description: "SUPPLY OF TOOLS AND CONSUMABLES", client: "TOTAL" },
    { id: 43, description: "CONTROL LINE SEAL REPAIR", client: "SPDC" },
    { id: 44, description: "SUPPLY OF MATERIALS AND TOOLS TO AMENAM ONNE BASE", client: "TOTAL" },
    { id: 45, description: "PROVISION OF RIGGING /SANDBLASTING /VESSEL CLEANING SERVICES", client: "CHEVRON" },
    { id: 46, description: "PROVISIONS FOR COMPLETE OVERHAULING OF EMERGENCY GENERATOR (CUMMINS KTA-19D 511KW) ON THE INTEGRITY", client: "OES ENERGY" },
    { id: 47, description: "MAINTENANCE OF IDU/SAMABIRI CPS", client: "NAOC" },
    { id: 48, description: "PROVISION OF FIELD MAINTENANCE SERVICES FOR OML 18 FACILITIES", client: "EROTON" },
    { id: 49, description: "POWER PLANT WATER TREATMENT", client: "DANGOTE" },
    { id: 50, description: "LEAK DETECTION TEST ON TANKS", client: "ORIENTAL ENERGY" },
    { id: 51, description: "HOT TAPPING OF A COMPRESSED AIR LINE", client: "EGBIN POWER PLC" },
    { id: 52, description: "INTERNAL CORROSION MONITORING - SAR", client: "NAOC" },
    { id: 53, description: "SUPPLY OF PRODUCTION CHEMICALS AND LUBRICANTS OML 30 OPERATIONS", client: "HERITAGE" },
    { id: 54, description: "CALIBRATION AND CERTIFICATION OF INSTRUMENTATION FLOW METERS & GAS DETECTORS", client: "WAV" },
    { id: 55, description: "SCSSV & WELLHEAD INTEGRITY FOR LAR & SAR", client: "NAOC" },
    { id: 56, description: "LAR WH & VALVE MAINT/GREASING", client: "NAOC" },
    { id: 57, description: "SUPPLY OF 500KVA E-GENERATOR SET TO OES FACILITY", client: "OES ENERGY" },
    { id: 58, description: "PROVISION OF SEALANT FOR RESTORATION", client: "SPDC" },
    { id: 59, description: "SUPPLY OF SURFACE PREPARARTION AND PAINTING MATERIALS", client: "OES ENERGY" },
    { id: 60, description: "SWAMP AREA DCS OPERATIONAL SPARES", client: "NAOC" },
    { id: 61, description: "PROVISION OF ESTUARY CL31BKT & CL51BKT", client: "SPDC" },
    { id: 62, description: "REPAIR OF INTERNAL REGENERATOR COLUMN", client: "NAOC" },
    { id: 63, description: "INSPECTION EVALUATION SAR PIPELINES", client: "NAOC" },
    { id: 64, description: "WELLHEAD XMAS TREE VALVE LEAK SEALING", client: "SPDC" },
    { id: 65, description: "TANK CALIBRATION DBs AGO", client: "TOG SHIPPING & OFFSHORE" },
    { id: 66, description: "ULTRASONIC THICKNESS MEASSUREMENT ON LPG TANKS", client: "CAKASA" },
    { id: 67, description: "SERVICING AND CALIBRATION OF AIR COMPRESOR", client: "DRILLOG PETRODYNAMICS" },
    { id: 68, description: "SUPPLY OF PC ADAPTER USB SIMAC S7, SVP D6543353, X5678, P/N 6GK1517-0BA00-0AA0, MFG: SIEMENS", client: "OES ENERGY" },
    { id: 69, description: "KWALE 17T RIVER/ROAD CROSS ANCILLARY WORKS", client: "NAOC" },
    { id: 70, description: "MONITORING AND MAINTENANCE OF GT-4 SAFETY CRITICA CAMP", client: "NAOC" },
    { id: 71, description: "LAR WELLHEAD AND VALVE MAINTENANCE/GREASING", client: "NAOC" },
    { id: 72, description: "SUPPLY OF 50,000 LITRES OF DIESEL TO OES INTEGRITY", client: "OES ENERGY" },
    { id: 73, description: "SUPPLY OF RELAY, ELECTRONIC TIMERS", client: "OES ENERGY" },
    { id: 74, description: "REMOVAL OF BUNKERING POINTS IN LAND AREA", client: "NAOC" },
    { id: 75, description: "INSPECTION, EVALUATION AND DIAGNOSTICS OF LAR LINES", client: "NAOC" },
    { id: 76, description: "PROVISION OF CONSTRUCTION TECHNICAL SUPPORT SERVICES", client: "CHEVRON" },
    { id: 77, description: "ILI OF 36\" RUMUJI - BONNY GAS LINE", client: "NAOC" },
    { id: 78, description: "SUPPLY OF PRODUCTION LUBRICANTS & CHEMICAL", client: "HERITAGE" },
    { id: 79, description: "AUTO CORROSION MAPPING OF OSHIE FS VES", client: "NAOC" },
    { id: 80, description: "SAR ONLINE LEAK SEALING + COMPOSITE REPAIR", client: "NAOC" },
    { id: 81, description: "INTERNAL CORROSION MONITORING - SAR", client: "NAOC" },
    { id: 82, description: "GMC HVAC & R MTCE NAOC LAR", client: "NAOC" },
    { id: 83, description: "SUPPLY OF 500KVA E- GENERATOR SET TO OES FACILITY", client: "OES ENERGY" },
    { id: 84, description: "AUTO CORROSION MAPPING OF NAOC'S KGP VESSELS", client: "NAOC" },
    { id: 85, description: "LRUT OF PIPELINES IN OML 60 AND IRRI", client: "NAOC" },
    { id: 86, description: "WELLHEAD INTEGRITY & SCSSV INSPECTION", client: "NAOC" },
    { id: 87, description: "LAR WELLHEAD & PROCESS VALVE MAINTENANCE", client: "NAOC" },
    { id: 88, description: "SAR WELLHEAD & PROCESS VALVE MAINTENANCE", client: "NAOC" },
    { id: 89, description: "SUPPLY & INSTALL GENERATOR & AU UNIT", client: "NAOC" },
    { id: 90, description: "PROVISION OF OPUK W34T – OPUKUSHI SWAMP 4\"", client: "SPDC" },
    { id: 91, description: "FIRST & SECOND LINE WELLHEAD MAINTENANCE SERVICES", client: "ADDAX" },
    { id: 92, description: "STATUTORY INSPECTION OF OSHIE FLOW STATION", client: "NAOC" },
    { id: 93, description: "INSTALLATION OF COUPONS IN NAOC FACILITIES", client: "NAOC" },
    { id: 94, description: "REFURBISHMENT OF BRASS TANKS CPS", client: "NAOC" },
    { id: 95, description: "ICDA FOR OBRIKOM EBOCHA & OBRIKOM OB-OB", client: "NAOC" },
    { id: 96, description: "INSTALLATION & COMMISSIONING OF IMPRESSED CURRENT CATHODIC PROTECTION AT OZA FIELD", client: "MILLENIUM OIL & GAS" },
    { id: 97, description: "OFFSHORE PRODUCTION SUPPORT SERVICES", client: "SPDC" },
    { id: 98, description: "STATUTORY INSPECTION OF OSHIE FLOWSTATION", client: "NAOC" },
    { id: 99, description: "WELL TUBING REPAIRS", client: "AGIP ENERGY" },
    { id: 100, description: "DOWNHOLE TUBING REPAIRS", client: "AGIP ENERGY" },
    { id: 101, description: "PROVISION OF INJECTION PUMP", client: "AGIP ENERGY" },
    { id: 102, description: "SUPPLY OF COMPLETE CCU/SOV", client: "NAOC" },
    { id: 103, description: "SCSSSV AND WELL INTEGRITY TESTING FOR SWAMP", client: "NAOC" },
    { id: 104, description: "LONG RANGE UTM OF LAND AREA PIPELINES", client: "NAOC" },
    { id: 105, description: "STATUTORY INSPECTION OF SLUG CATCHERS OB-OB", client: "NAOC" },
    { id: 106, description: "ACOUSTIC EMISSION RISK ASSESSMENT FOR SWAMP AREAS", client: "NAOC" },
    { id: 107, description: "WELLHEAD MAINTENANCE & MONITORING FOR SWAMP AREAS", client: "NAOC" },
    { id: 108, description: "STATUTORY INSPECTION OF IDU FS", client: "NAOC" },
    { id: 109, description: "UTM OF SWAMP AREA FACILITIES", client: "NAOC" },
    { id: 110, description: "STATUTORY INSPECTION OF LAND AREA FACILITIES", client: "NAOC" },
    { id: 111, description: "MONITORING OF CATHODIC PROTECTION SYSTEM – SWAMP AREA", client: "NAOC" },
    { id: 112, description: "COATING OF DEFECTS SURVEY AND REPAIRS OF NAOC SWAMP AREA PIPELINES", client: "NAOC" },
    { id: 113, description: "PROVISION OF SMALL BORE INTELLIGENT PIGGING SERVICES", client: "SPDC" },
    { id: 114, description: "REPAIR OF INTERNAL OF REGENERATOR COLUMN", client: "NAOC" },
    { id: 115, description: "HOOK-UP OF WELL 6 & WELL 8 OGBELE", client: "NDPR" },
    { id: 116, description: "TECHNICAL INSPECTION OF 4NO BRIDGES ON NDONI 6TH SECTION", client: "NAOC" },
    { id: 117, description: "PROVISION OF MANUAL NDT SERVICES FOR OB/OB GAS PLANT", client: "NAOC" },
    { id: 118, description: "PROVISION OF CONTROL LINE SEAL REPAIR SERVICES", client: "SPDC" },
    { id: 119, description: "WASTE DRILL/BACK FILLING", client: "SPDC" },
    { id: 120, description: "FABRICATION AND INSTALLATION OF 4 STAND SELF-SUPPORTING 35 METRES MINITOWER AT ABULOMA, RIVERS STATE", client: "NESTOIL" },
    { id: 121, description: "FABRICATION AND INSTALLATION OF 4 STAND SELF-SUPPORTING 50 METERS MINITOWER AT KWALE, DELTA STATE", client: "NESTOIL" },
    { id: 122, description: "FABRICATION AND INSTALLATION OF 4 STAND SELF-SUPPORTING 50 METRES MINITOWER AT UYO, AKWA IBOM STATE", client: "NESTOIL" },
    { id: 123, description: "PROVISION OF WELDING SERVICES", client: "CHEVRON" },
    { id: 124, description: "PROVISION OF RIGGING/SAND BLASTING AND VESSEL CLEANING", client: "CHEVRON" },
    { id: 125, description: "MAINTENANCE OF ALL CENTRAL A/C's", client: "PHRC" },
    { id: 126, description: "INTEGRATED PIPELINE PIGGING & CORROSION CONTROL (INTERNAL & EXTERNAL CORROSION MONITORING)", client: "SPDC" },
    { id: 127, description: "TECHNICAL INSPECTION OF KWALE MAIN ROAD STEEL DECK BRIDGE", client: "NAOC" },
    { id: 128, description: "REHABILITATION OF 17A01 & 15A03 STRUCTURAL SUPPORT", client: "PHRC" },
    { id: 129, description: "CABLE FAULT LOCATION AND REPAIRS", client: "PHRC" },
    { id: 130, description: "REHABILITATION OF 12A01B3/B4 STRUCTURAL SUPPORT", client: "PHRC" },
    { id: 131, description: "CABLE LAYING, SPLICING AND TERMINATION OF 16 CORE FOC TO AREA 1 & 2", client: "PHRC" },
    { id: 132, description: "SUPPLY OF SCAFFOLDING EQUIPMENT", client: "SPDC" },
    { id: 133, description: "PAINTING OF OPERATING FACILITY", client: "BAKER HUGHES" }
  ];

  // Get unique clients for filter dropdown
  const uniqueClients = useMemo(() => {
    const clients = [...new Set(projectsData.map(project => project.client))];
    return ['All', ...clients.sort()];
  }, []);

  // Filter and group projects by client
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by selected client
    if (selectedClient !== 'All') {
      filtered = filtered.filter(project => project.client === selectedClient);
    }

    // Group by client
    const grouped = filtered.reduce((acc, project) => {
      if (!acc[project.client]) {
        acc[project.client] = [];
      }
      acc[project.client].push(project);
      return acc;
    }, {});

    return grouped;
  }, [searchTerm, selectedClient]);

  // Toggle client expansion
  const toggleClient = (client) => {
    const newExpanded = new Set(expandedClients);
    if (newExpanded.has(client)) {
      newExpanded.delete(client);
    } else {
      newExpanded.add(client);
    }
    setExpandedClients(newExpanded);
  };

  // Expand all clients
  const expandAll = () => {
    setExpandedClients(new Set(Object.keys(filteredProjects)));
  };

  // Collapse all clients
  const collapseAll = () => {
    setExpandedClients(new Set());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Our Projects
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed">
              Delivering Excellence Across the Oil & Gas Industry
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl  p-4 sm:p-6 mb-6 sm:mb-8"
        >
          <div className="flex flex-col gap-4">
            {/* Top Row - Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects or clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                />
              </div>

              {/* Client Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white w-full sm:min-w-[200px] text-base"
                >
                  {uniqueClients.map(client => (
                    <option key={client} value={client}>
                      {client === 'All' ? 'All Clients' : client}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bottom Row - Expand/Collapse Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button
                onClick={expandAll}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base"
              >
                Collapse All
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects by Client */}
        <div className="grid gap-6 sm:gap-8">
          {Object.entries(filteredProjects).map(([client, projects], index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl  overflow-hidden border border-gray-100"
            >
              {/* Client Header */}
              <div
                className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-4 sm:p-6 lg:p-8 cursor-pointer hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
                onClick={() => toggleClient(client)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center  border-2 border-gray-200 overflow-hidden flex-shrink-0">
                      {clientLogos[client] ? (
                        <img 
                          src={clientLogos[client]} 
                          alt={`${client} logo`}
                          className="w-full h-full object-contain p-1 sm:p-2"
                        />
                      ) : (
                        <Building className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 leading-tight break-words">
                        {client}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                        {projects.length} {projects.length === 1 ? 'Project' : 'Projects'} Completed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold whitespace-nowrap">
                      {projects.length} Projects
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center  flex-shrink-0">
                      {expandedClients.has(client) ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects List */}
              <AnimatePresence>
                {expandedClients.has(client) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="grid gap-4 sm:gap-6">
                        {projects.map((project, projectIndex) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: projectIndex * 0.05 }}
                            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 "
                          >
                            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm ">
                                {project.id}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base lg:text-lg break-words">
                                  {project.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {Object.keys(filteredProjects).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-12"
          >
            <div className="bg-white rounded-xl  p-6 sm:p-8">
              <Search className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No Projects Found</h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Try adjusting your search terms or filter criteria.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
