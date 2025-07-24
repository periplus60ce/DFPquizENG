// Digital Force Protection (DFP) Quiz - Hybrid Theoretical + Scenario-based

const questions = [
  {
    id: 1,
    question: "What does the command `sudo airmon-ng start wlan1` do?",
    choices: [
      "A) Shuts down wireless interface",
      "B) Puts wlan1 into monitor mode",
      "C) Scans for open ports",
      "D) Extracts hidden files"
    ],
    correct: "01000010",
    debrief: "This command puts the wireless interface into monitor mode, allowing for packet capture."
  },
  {
    id: 2,
    question: "You receive an urgent PDF from \"Col. J. Matthews\" — but it feels off and you're not in his unit. What's happening?",
    choices: [
      "A) Man-in-the-middle attack",
      "B) DDoS disruption",
      "C) Phishing attempt",
      "D) Session hijack"
    ],
    correct: "01000011",
    debrief: "This is a phishing attempt. Impersonation and urgency are red flags for social engineering."
  },
  {
    id: 3,
    question: "True or False: The hash output from MD5 is guaranteed to be unique for any file input.",
    choices: [
      "True",
      "False"
    ],
    correct: "01000110",
    debrief: "MD5 is vulnerable to collisions — different inputs can yield the same hash."
  },
  {
    id: 4,
    question: "What is a correct countermeasure when using public or semi-trusted Wi-Fi environments?",
    choices: [
      "A) Use Bluetooth tethering",
      "B) Connect directly to local SSID",
      "C) Enable MAC address randomization",
      "D) Allow all auto-connect prompts"
    ],
    correct: "01000011",
    debrief: "MAC randomization reduces tracking risk and limits passive surveillance."
  },
  {
    id: 5,
    question: "Which tool can be used to extract embedded data from an image file?",
    choices: [
      "A) sha256",
      "B) nmap",
      "C) steghide",
      "D) curl"
    ],
    correct: "01000011",
    debrief: "Steghide is designed to embed or extract hidden data within images and audio files."
  },
  {
    id: 6,
    question: "True or False: A drive-by attack requires the user to download and execute a file.",
    choices: [
      "True",
      "False"
    ],
    correct: "01000110",
    debrief: "False — drive-by attacks often occur just by visiting a compromised site."
  },
  {
    id: 7,
    question: "What is the purpose of `exiftool` in DFP operations?",
    choices: [
      "A) Encrypt files",
      "B) Edit source code",
      "C) View and modify metadata",
      "D) Monitor network ports"
    ],
    correct: "01000011",
    debrief: "Exiftool is used to view or remove metadata from image and document files, helping prevent OPSEC leaks."
  },
  {
    id: 8,
    question: "True or False: DNS spoofing can redirect traffic to a malicious site without altering the browser URL.",
    choices: [
      "True",
      "False"
    ],
    correct: "01010100",
    debrief: "True — DNS spoofing works by hijacking domain resolution behind the scenes."
  },
  {
    id: 9,
    question: "Which action would help defend against rogue access points in a contested area?",
    choices: [
      "A) Use VPN only on mobile phones",
      "B) Enable Bluetooth scanning",
      "C) Conduct RF sweeps and MAC filtering",
      "D) Accept local SSIDs if signal is strong"
    ],
    correct: "01000011",
    debrief: "RF sweeps and MAC filtering help identify and prevent unauthorized devices on your network."
  },
  {
    id: 10,
    question: "What type of attack involves flooding a network to render it unusable?",
    choices: [
      "A) Spear-phishing",
      "B) DDoS",
      "C) MITM",
      "D) SQL injection"
    ],
    correct: "01000010",
    debrief: "Distributed Denial-of-Service (DDoS) attacks overwhelm a network with traffic to disrupt operations."
  },
  {
    id: 11,
    question: "What is a key security practice when analyzing suspicious USB devices?",
    choices: [
      "A) Plug them directly into mission systems",
      "B) Use an air-gapped forensic sandbox",
      "C) Reformat and reuse them",
      "D) Trust if they come from allies"
    ],
    correct: "01000010",
    debrief: "Use air-gapped systems to avoid compromise when analyzing unknown USB devices."
  },
  {
    id: 12,
    question: "True or False: `nmap` can help identify open ports and active services on a target device.",
    choices: [
      "True",
      "False"
    ],
    correct: "01010100",
    debrief: "Nmap is a port scanner — ideal for reconnaissance and exposure analysis."
  },
  {
    id: 13,
    question: "Which cyberattack exploits poor database input sanitization to exfiltrate sensitive data?",
    choices: [
      "A) Cross-Site Scripting",
      "B) DNS Spoofing",
      "C) SQL Injection",
      "D) Man-in-the-Middle"
    ],
    correct: "01000011",
    debrief: "SQL injection exploits unsanitized input fields to manipulate and access database contents."
  },
  {
    id: 14,
    question: "True or False: `sha256` is considered more secure than `md5` due to resistance to collisions.",
    choices: [
      "True",
      "False"
    ],
    correct: "01010100",
    debrief: "True — sha256 is cryptographically stronger and resistant to collision attacks unlike MD5."
  },
  {
    id: 15,
    question: "A suspicious site loads with slightly altered font and design, and your browser warns of a certificate error. What's likely happening?",
    choices: [
      "A) Drive-by malware",
      "B) URL obfuscation",
      "C) DNS spoofing",
      "D) Insider threat"
    ],
    correct: "01000011",
    debrief: "This is DNS spoofing — the attacker rerouted DNS queries to a fake site."
  },
  {
    id: 16,
    question: "Which of the following is a best practice for digital OPSEC in the field?",
    choices: [
      "A) Use default SSIDs for faster reconnects",
      "B) Share local Wi-Fi with nearby allied units",
      "C) MAC address randomization",
      "D) Enable automatic network joining"
    ],
    correct: "01000011",
    debrief: "MAC address randomization prevents passive tracking and profiling in contested areas."
  },
  {
    id: 17,
    question: "You receive a flash drive labeled 'Translation Tool for Field Use' from a local vendor. What’s the proper action?",
    choices: [
      "A) Plug it into your work laptop",
      "B) Use an air-gapped analysis machine",
      "C) Trust it if it appears legit",
      "D) Share it with the team"
    ],
    correct: "01000010",
    debrief: "Unknown USBs should only be inspected in an air-gapped sandbox — they could contain Trojans."
  },
  {
    id: 18,
    question: "True or False: Visiting a malicious website is harmless if you don't click anything.",
    choices: [
      "True",
      "False"
    ],
    correct: "01000110",
    debrief: "False — some malicious sites use drive-by code that executes without clicks."
  },
  {
    id: 19,
    question: "Which of these is a form of metadata that might reveal location or device info?",
    choices: [
      "A) IP address",
      "B) EXIF data",
      "C) Packet length",
      "D) Port number"
    ],
    correct: "01000010",
    debrief: "EXIF data often contains GPS coordinates, timestamps, and camera info — useful in targeting."
  },
  {
    id: 20,
    question: "A teammate’s secure chat app disconnects randomly in a local café with open Wi-Fi. What type of attack is likely?",
    choices: [
      "A) Drive-by attack",
      "B) Insider threat",
      "C) Man-in-the-middle",
      "D) DNS spoofing"
    ],
    correct: "01000011",
    debrief: "Unsecured public networks are common environments for MITM attacks."
  },
  {
    id: 21,
    question: "Which hashing algorithm is more resistant to collision attacks?",
    choices: [
      "A) MD5",
      "B) SHA256",
      "C) XOR",
      "D) DES"
    ],
    correct: "01000010",
    debrief: "SHA256 is designed to be collision-resistant, unlike older algorithms like MD5."
  },
  {
    id: 22,
    question: "True or False: Metadata can be edited or removed from files before sharing to protect OPSEC.",
    choices: [
      "True",
      "False"
    ],
    correct: "01010100",
    debrief: "Exiftool or similar tools can be used to sanitize files before distribution."
  },
  {
    id: 23,
    question: "What does `sudo airodump-ng wlan1mon` do?",
    choices: [
      "A) Starts packet sniffing in monitor mode",
      "B) Disables the Wi-Fi interface",
      "C) Launches a brute-force attack",
      "D) Clones a Wi-Fi access point"
    ],
    correct: "01000001",
    debrief: "Airodump-ng captures nearby Wi-Fi packets while in monitor mode."
  },
  {
    id: 24,
    question: "You find a camera hidden under a shelf in your safehouse. What’s your next best step?",
    choices: [
      "A) Tape over it",
      "B) Destroy it",
      "C) Conduct full TSCM sweep",
      "D) Ignore unless it's transmitting"
    ],
    correct: "01000011",
    debrief: "A TSCM (Technical Surveillance Countermeasure) sweep helps find and neutralize hidden threats."
  },
  {
    id: 25,
    question: "True or False: Accepting default SSIDs in hostile environments is acceptable if signal is strong.",
    choices: [
      "True",
      "False"
    ],
    correct: "01000110",
    debrief: "Default SSIDs can be spoofed — always confirm source and use travel routers."
  },
  {
    id: 26,
    question: "What does the command `sha256sum filename.txt` output?",
    choices: [
      "A) File's entropy",
      "B) Hex-encoded hash",
      "C) Signature key",
      "D) Password hint"
    ],
    correct: "01000010",
    debrief: "sha256sum outputs a file's SHA256 hash — used for integrity verification."
  },
  {
    id: 27,
    question: "A phishing email appears to come from a real unit with correct call signs. What kind of attack is this?",
    choices: [
      "A) Whale phishing",
      "B) Drive-by phishing",
      "C) Spear-phishing",
      "D) Brute force"
    ],
    correct: "01000011",
    debrief: "Spear-phishing targets individuals with personalized content and context."
  },
  {
    id: 28,
    question: "True or False: Running a VPN at the router level protects all devices connected to that network.",
    choices: [
      "True",
      "False"
    ],
    correct: "01010100",
    debrief: "VPN at the router ensures encrypted tunneling for all connected clients."
  },
  {
    id: 29,
    question: "What’s the recommended action when suspicious outbound connections are detected on a sideloaded APK?",
    choices: [
      "A) Trust if app was popular",
      "B) Wipe the phone immediately",
      "C) Analyze in air-gapped environment",
      "D) Disable DNS"
    ],
    correct: "01000011",
    debrief: "Sideloaded apps should be analyzed in sandboxed environments before trust is established."
  },
  {
    id: 30,
    question: "Which is the most effective first-step countermeasure when discovering a spoofed Wi-Fi hotspot nearby?",
    choices: [
      "A) MAC address hardcoding",
      "B) Leave device Wi-Fi enabled",
      "C) Conduct RF sweep",
      "D) Allow connection to gather intel"
    ],
    correct: "01000011",
    debrief: "An RF sweep reveals signal source and anomalies — essential for contested environments."
  }
];

export default questions;
