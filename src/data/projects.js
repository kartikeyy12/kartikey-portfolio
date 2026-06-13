export const categories = [
  {
    id: 'robotics-embedded',
    label: 'Robotics & Embedded Hardware',
    number: '01',
    projects: [
      {
        id: 'deliverybot',
        title: 'DeliveryBot-NITG Rover',
        subtitle: 'Autonomous In-Campus Robo-Delivery System',
        year: '2024',
        tags: ['ESP32', 'GPS Navigation', 'Embedded C++', 'State Machine', 'Differential Drive'],
        status: 'Completed',
        sections: [
          {
            title: 'The Motivation',
            content: 'Traditional campus logistics at NIT Goa — the transit of administrative documents or lab materials between departments — rely entirely on manual human effort. The goal was to build a contactless, on-demand robotic platform capable of last-minute delivery to eliminate these inefficiencies. The system needed to navigate complex campus geometries independently and operate entirely offline, as relying on continuous internet connectivity across all zones of the campus was not a viable option.',
          },
          {
            title: 'Engineering Architecture & Execution',
            content: 'I developed a 2WD differential drive rover governed by an ESP32 WROOM-32 microcontroller. The entire software stack was built using a strictly non-blocking C++ state machine, ensuring the dual-core processor could simultaneously serve web requests, drain GPS bytes, and poll spatial sensors without freezing. The ESP32 operates in Access Point (AP) mode, hosting a standalone web server with a mobile-optimized UI stored directly in PROGMEM using Base64 encoding. Users connect to the local network to select a destination and initiate the dispatch sequence. For spatial awareness, I integrated a U-blox NEO-6M GPS for macro-navigation, paired with an I2C magnetometer (QMC5883L) for continuous 8-point cardinal heading correction.',
          },
          {
            title: 'Technical Hurdles & Solutions',
            content: 'Navigating curved pathways was the first challenge — standard GPS logic attempts to travel in a straight line, which fails on curved campus roads. I solved this with a Waypoint Queuing system, where the robot follows a breadcrumb trail of pre-surveyed coordinates. Ultrasonic sensor crosstalk from three HC-SR04 sensors caused false positives; I rewrote the firmware to enforce strict sequential firing. Early iterations also suffered from hidden 90ms blocking delays during ultrasonic read loops — transitioning to a non-blocking state machine resolved this entirely.',
          },
          {
            title: 'Final Impact & Results',
            content: 'Firmware version 4.0 successfully validated the physical prototype. The DeliveryBot can autonomously navigate complex real-world geometries — including V-shaped roads and U-turns — while actively compensating for GPS drift without any manual steering intervention. The project proved the viability of a low-cost, internet-independent robotic transit system for structured environments, laying the foundation for future upgrades including ROS-based dynamic path planning and LiDAR integration.',
          },
        ],
        artifacts: [
          { label: 'Source Code', href: 'https://github.com/kartikeyy12/DeliveryBot-NITG' },
          { label: 'Hackster.io', href: 'https://www.hackster.io/kartikey-tiwari/deliverybot-nitg-autonomous-campus-rover-f235c5' },
          { label: 'Demo Video', href: 'https://drive.google.com/file/d/1zHF1fIpplKEKeNxKaXLTZ_2-ds54X5HS/view' },
        ],
      },
      {
        id: 'edgefusion',
        title: 'EdgeFusion',
        subtitle: 'Hardware-Accelerated C++20 Sensor Fusion Pipeline',
        year: '2024',
        tags: ['C++20', 'Extended Kalman Filter', 'NVIDIA Jetson', 'ZeroMQ', 'IMU Fusion'],
        status: 'Completed',
        sections: [
          {
            title: 'The Motivation',
            content: 'In autonomous aerial and robotic systems, sensor latency directly impacts control loop stability. Traditional robotics stacks like ROS2 route data through serialization layers and shared memory brokers, adding critical milliseconds of delay. For a fast-moving drone, a 10ms delay in state estimation can mean the difference between a stable hover and a crash. My objective was to build a production-grade fusion pipeline that cuts out every intermediary, allowing sensor data to travel directly from hardware callbacks to the central fusion engine.',
          },
          {
            title: 'Engineering Architecture & Execution',
            content: 'I developed a high-performance, middleware-free pipeline written entirely in portable C++20. The system fuses 200Hz IMU telemetry with 30Hz camera frames using a custom 15-state Extended Kalman Filter (EKF). The state vector accurately tracks position, velocity, quaternion orientation, and both accelerometer and gyroscope biases. The architecture is split across three isolated threads communicating via ZeroMQ over local domain sockets. To ensure realistic tuning before hardware deployment, I also engineered a custom MEMS IMU simulator that accurately models both thermal white noise and random walk bias instability.',
          },
          {
            title: 'Technical Hurdles & Solutions',
            content: 'Decoding 30Hz video frames and copying them from GPU to CPU memory wastes roughly 27MB/s of bandwidth. I solved this by implementing a Zero-Copy Vision Bridge using GStreamer and OpenCV, mapping a CPU-readable window directly into the decoder memory using a matrix header. For delayed vision measurements arriving up to 33ms after capture, I engineered a 256-slot circular ring buffer that binary-searches for the historical state at the exact capture timestamp, applies the Kalman update retroactively, and re-propagates all subsequent IMU inputs forward to the present.',
          },
          {
            title: 'Final Impact & Results',
            content: 'The system was successfully deployed and benchmarked on real ARM64 hardware using an NVIDIA Jetson Orin Nano. The IMU IPC path achieved a mean latency of 277 microseconds — 25 to 80 times faster than the standard ROS2 image transport baseline. EdgeFusion proves that a self-contained architecture can deliver the sub-millisecond precision required for the next generation of real-time autonomous systems.',
          },
        ],
        artifacts: [
          { label: 'Source Code', href: 'https://github.com/kartikeyy12/EdgeFusion' },
        ],
      },
      {
        id: 'riscv-soc',
        title: 'Fault-Tolerant RISC-V SoC',
        subtitle: 'Full-Stack Silicon Design with Custom Instruction Set Extensions',
        year: '2025',
        tags: ['SystemVerilog', 'RISC-V', 'FPGA', 'EDA', 'Systolic Array', 'UVM'],
        status: 'In Progress',
        sections: [
          {
            title: 'The Motivation',
            content: 'I wanted to move beyond integrating off-the-shelf microcontrollers and truly understand computer architecture from first principles. My goal was to build a complete System on Chip from scratch, tailoring it for heavy machine learning workloads while making it robust enough for high-reliability environments like aerospace, where radiation-induced bit-flips are a major concern. I also set a strict constraint to build this using a 100% open-source Electronic Design Automation stack.',
          },
          {
            title: 'Engineering Architecture & Execution',
            content: 'I designed a custom RV32I base core using SystemVerilog. To handle machine learning workloads efficiently, I engineered a 2D Systolic Array as an integrated AI accelerator and modified the RISC-V GNU Compiler Toolchain to recognize custom instruction set extensions that trigger matrix operations. For the reliability component, I implemented a Temporal Lockstep architecture that mitigates soft errors by running instructions redundantly and checking for state mismatches caused by simulated radiation bit-flips. The verification environment is built entirely in Python using Google\'s riscv-dv framework and an industry-standard UVM testbench via cocotb and pyuvm.',
          },
          {
            title: 'Technical Hurdles & Solutions',
            content: 'Implementing UVM in Python rather than SystemVerilog required adapting traditional industry paradigms to an open-source workflow. Integrating custom ISA extensions meant designing new opcodes, modifying the decode stage to route data to the accelerator, and ensuring the C compiler could target these new hardware paths. The Temporal Lockstep mechanism required careful clock-cycle management to ensure the core could cleanly flush the pipeline and recover state without hard-crashing on a detected bit-flip.',
          },
          {
            title: 'Current Status & Future Impact',
            content: 'This is an ongoing project. The hardware description, instruction set extensions, and simulation environments are complete. Currently in Phase 6, writing bare-metal C programs to run actual AI inference directly on the simulated core. The final phase will involve synthesizing the RTL using Yosys and nextpnr to flash onto a Gowin FPGA (Tang Nano 9K). This project demonstrates a full-stack understanding of chip design — from RTL coding and formal verification to compiler toolchains and bare-metal software development.',
          },
        ],
        artifacts: [
          { label: 'Source Code', href: '#', note: 'Work in Progress' },
        ],
      },
    ],
  },
  {
    id: 'rf-communications',
    label: 'RF & Communications Engineering',
    number: '02',
    projects: [
      {
        id: 'gfsk-walkie-talkie',
        title: 'GFSK Digital Walkie-Talkie',
        subtitle: 'A 2.4 GHz Half-Duplex Wireless Communication System',
        year: '2024',
        tags: ['GFSK Modulation', 'nRF24L01+', 'ATmega328P', 'RF Design', 'MATLAB'],
        status: 'Completed',
        sections: [
          {
            title: 'The Motivation',
            content: 'Traditional consumer analog walkie-talkies utilizing standard FM are highly susceptible to electromagnetic interference, hum, and static. My objective for this EC256 Communication Lab project at NIT Goa was to design a fully digital half-duplex voice transceiver from scratch. Operating in the 2.4 GHz ISM band, the goal was to create a secure, low-latency audio link that functions completely independently of commercial cellular or Wi-Fi networks — ideal for off-grid or dense industrial environments.',
          },
          {
            title: 'Engineering Architecture & Execution',
            content: 'The signal acquisition phase starts with an electret microphone routed through an LM358 operational amplifier in a non-inverting topology for active pre-amplification. The ATmega328P internal ADC samples and quantizes this conditioned 0–5V waveform into an 8-bit digital payload, which is then clocked via SPI to an NRF24L01 transceiver. The module applies Gaussian Frequency Shift Keying modulation — utilizing a Gaussian filter to smooth the digital pulses before frequency modulating the 2.4 GHz carrier wave — significantly reducing adjacent channel interference.',
          },
          {
            title: 'Technical Hurdles & Solutions',
            content: 'The Arduino UNO lacks a dedicated DAC. I solved this at the receiver node by dynamically adjusting the duty cycle of a high-frequency PWM signal to mirror the original audio amplitude, then designed a passive RC low-pass filter to attenuate the PWM switching harmonics, effectively integrating the square wave back into a smooth analog baseband. For load driving, I integrated an LM386 audio power amplifier paired with a Zobel network to filter out RF interference. Before finalizing hardware, I mathematically modelled the entire discrete sampling, quantization, and GFSK modulation processes using MATLAB.',
          },
          {
            title: 'Final Impact & Results',
            content: 'The finalized prototype successfully facilitated real-time acoustic reconstruction between two nodes. By transmitting discrete digital payloads rather than open analog broadcasts, the system achieves pristine audio clarity with high noise immunity. Built for under ₹1,000 per node, the architecture proves the viability of a low-cost, highly secure localized communication networks.',
          },
        ],
        artifacts: [
          { label: 'Source Code', href: 'https://github.com/kartikeyy12/GFSK-Digital-Walkie-Talkie' },
          { label: 'Hackster.io', href: 'https://www.hackster.io/kartikey-tiwari/digital-gfsk-walkie-talkie-architecture-5859e6' },
          { label: 'Demo Video', href: 'https://drive.google.com/file/d/1ouILuM_sI8dZclaWzuerJ9EzGAA2eiIv/view' },
        ],
      },
      {
        id: 'sdr-interferometer',
        title: 'SDR Interferometer',
        subtitle: 'GPU-Accelerated Polyphase Filterbank Spectrometer',
        year: '2025',
        tags: ['SDR', 'CUDA', 'Polyphase Filterbank', 'FX Correlator', 'Radio Astronomy'],
        status: 'In Progress',
        sections: [
          {
            title: 'The Motivation',
            content: 'The objective of this project is to build a miniature two-element radio interferometer that replicates the exact signal-processing chain used in professional observatories like the GMRT and the VLA. By keeping the hardware budget strictly under ₹3,500, the focus shifts entirely to deep digital signal processing. The goal is to move beyond standard FFTs and build a true Polyphase Filterbank Spectrometer from the ground up to eliminate spectral leakage.',
          },
          {
            title: 'Engineering Architecture & Execution',
            content: 'The system follows the classic FX correlator model. The analog front-end uses NE555 oscillators, LM358 op-amp buffers, and custom RC delay networks to emulate the geometric path length difference between two physical antennas. These conditioned signals are digitized by an ATmega328P ADC and streamed over serial to the host. The heavy computation is offloaded to an NVIDIA GPU — data passes through a Polyphase Filterbank before undergoing batch FFTs and cross-correlation, utilizing CuPy and CUDA for parallel acceleration.',
          },
          {
            title: 'Technical Hurdles & Solutions',
            content: 'Because the Arduino\'s ADC multiplexes its analog pins, it cannot sample two channels truly simultaneously. A precise 1-sample time-shift correction is being implemented in the DSP pipeline to compensate. Standard windowed FFTs suffer from significant spectral leakage — a custom FIR prototype filter with polyphase decomposition pushes channel isolation and sidelobe attenuation well beyond 80 dB. GPU memory transfer bottlenecks are addressed through strictly batched cuFFT executions.',
          },
          {
            title: 'Current Status & Future Impact',
            content: 'Currently in the initial phase, with active development focused on mathematical modeling and analog front-end construction. The immediate roadmap includes completing the GPU-accelerated FX correlator and archiving visibility data in HDF5 format. Once the baseline architecture is validated, the hardware will be upgraded to synchronized RTL-SDR dongles to attempt actual 21-cm Galactic Hydrogen line detection.',
          },
        ],
        artifacts: [
          { label: 'Source Code', href: '#', note: 'Work in Progress' },
        ],
      },
    ],
  },
  {
    id: 'iot-applied',
    label: 'IoT & Applied Innovation',
    number: '03',
    projects: [
      {
        id: 'deliverybot-iot',
        title: 'DeliveryBot-NITG Rover',
        subtitle: 'Autonomous In-Campus Robo-Delivery System',
        year: '2024',
        tags: ['ESP32', 'GPS Navigation', 'Embedded C++', 'State Machine', 'Differential Drive'],
        status: 'Completed',
        sections: [
          {
            title: 'The Motivation',
            content: 'Traditional campus logistics at NIT Goa — the transit of administrative documents or lab materials between departments — rely entirely on manual human effort. The goal was to build a contactless, on-demand robotic platform capable of last-mile delivery to eliminate these inefficiencies. The system needed to navigate complex campus geometries independently and operate entirely offline, as relying on continuous internet connectivity across all zones of the campus was not a viable option.',
          },
          {
            title: 'Engineering Architecture & Execution',
            content: 'I developed a 2WD differential drive rover governed by an ESP32 WROOM-32 microcontroller. The entire software stack was built using a strictly non-blocking C++ state machine, ensuring the dual-core processor could simultaneously serve web requests, drain GPS bytes, and poll spatial sensors without freezing. The ESP32 operates in Access Point (AP) mode, hosting a standalone web server with a mobile-optimized UI stored directly in PROGMEM using Base64 encoding.',
          },
          {
            title: 'Technical Hurdles & Solutions',
            content: 'Navigating curved pathways was the first challenge — standard GPS logic attempts to travel in a straight line, which fails on curved campus roads. I solved this with a Waypoint Queuing system. Ultrasonic sensor crosstalk from three HC-SR04 sensors caused false positives; I rewrote the firmware to enforce strict sequential firing. Early iterations also suffered from hidden 90ms blocking delays — transitioning to a non-blocking state machine resolved this entirely.',
          },
          {
            title: 'Final Impact & Results',
            content: 'Firmware version 4.0 successfully validated the physical prototype. The DeliveryBot can autonomously navigate complex real-world geometries — including V-shaped roads and U-turns — while actively compensating for GPS drift without any manual steering intervention.',
          },
        ],
        artifacts: [
          { label: 'Source Code', href: 'https://github.com/kartikeyy12/DeliveryBot-NITG' },
          { label: 'Hackster.io', href: 'https://www.hackster.io/kartikey-tiwari/deliverybot-nitg-autonomous-campus-rover-f235c5' },
          { label: 'Demo Video', href: 'https://drive.google.com/file/d/1zHF1fIpplKEKeNxKaXLTZ_2-ds54X5HS/view' },
        ],
      },
      {
        id: 'ice-stupa',
        title: 'Hack-The-Glaciers',
        subtitle: 'Edge-Computed Infrastructure for High-Altitude Climate Adaptation',
        year: '2024',
        tags: ['ESP32', 'ESP-NOW Mesh', 'DS18B20', 'LiDAR', 'Climate Tech', 'Open Source'],
        status: 'Completed',
        sections: [
          {
            title: 'The Motivation',
            content: 'Ice Stupas are massive conical ice reservoirs in Ladakh that store winter meltwater for the dry spring farming season. The traditional manual construction process is highly vulnerable to infrastructure failure: water freezes and bursts mid-pipe during peak winter, existing ice melts during unexpected warm days, and the steep valleys lack cellular connectivity for remote monitoring. I wanted to engineer a complete, edge-computed automation ecosystem to solve these bottlenecks — and while student budget constraints kept me from traveling to Ladakh, I built, bench-tested, and open-sourced the entire architecture.',
          },
          {
            title: 'Engineering Architecture & Execution',
            content: 'I developed a decentralized ecosystem of four integrated ESP32-based subsystems. An Off-Grid Mesh Network uses the native ESP-NOW protocol to simulate a rugged 3-node mesh topology. An Active Anti-Freeze Controller fuses thermal (DS18B20) and kinetic (YF-S201) sensor data to autonomously drive a 12V motorized ball valve when freeze risk is predicted. A Predictive Microclimate Flow System runs a Wet-Bulb approximation on a BME280 sensor to calculate an offline Ice Potential Index. A Spatial Volume Scanner uses a mechanized pan-tilt system with a micro-LiDAR module to sweep a spherical grid and render an interactive 3D point cloud via Python.',
          },
          {
            title: 'Technical Hurdles & Solutions',
            content: 'Offline computation was mandatory — complex mathematical models including the Wet-Bulb approximation and Ice Potential Index had to be implemented directly on the ESP32. Establishing a resilient mesh required application-layer acknowledgments and dynamic transmission power adjustments within ESP-NOW. The 3D scanner challenge was translating raw 1D distance measurements and servo angles into precise 3D Cartesian coordinates to generate a reliable point cloud.',
          },
          {
            title: 'Final Impact & Results',
            content: 'This project resulted in a comprehensive, open-source hardware and firmware ecosystem designed specifically for climate adaptation. It successfully demonstrates how autonomous control loops, localized mesh networks, and edge computing can automate the construction of artificial glaciers — preventing pipe freezing, optimizing water usage, and eliminating the physical dangers of manual ice measurement.',
          },
        ],
        artifacts: [
          { label: 'Source Code & Documentation', href: 'https://github.com/kartikeyy12/HACK-THE-GLACIERS-Automated-Ice-Stupa-System' },
        ],
      },
    ],
  },
  {
    id: 'ai-agents',
    label: 'AI Agents & Software Architecture',
    number: '04',
    projects: [
      {
        id: 'youtube-shorts-pipeline',
        title: 'Automated YouTube Shorts Pipeline',
        subtitle: 'AI-Powered Content Creation and Publishing System',
        year: '2024',
        tags: ['Python', 'LLM Agents', 'FFmpeg', 'TTS', 'YouTube Data API', 'CUDA'],
        status: 'Completed',
        sections: [
          {
            title: 'The Motivation',
            content: 'Producing high-quality vertical video content requires significant manual effort in research, scripting, audio synthesis, and video editing. The goal of this project was to build a completely zero-touch automation system capable of handling the entire content lifecycle autonomously. By leveraging a modular, agent-based architecture, the objective was to produce cinematic, high-retention Shorts on a scheduled daily trigger without any human intervention.',
          },
          {
            title: 'Engineering Architecture & Execution',
            content: 'The system is built in Python 3.12 and runs natively on Linux or WSL2 Ubuntu. A Trend Agent scrapes niche RSS feeds using Feedparser, BeautifulSoup4, and LXML. A Script Agent drafts a 35–50 second cinematic script using Llama 3.3 70B via the Groq Cloud API, with a local Ollama Phi-3 Mini fallback. Kokoro TTS synthesizes offline voice audio using PyTorch, while OpenAI\'s Faster-Whisper extracts precise word-level timestamps. The system then queries the Pexels API for contextual stock footage, applies Ken Burns zoom effects, and hardcodes animated subtitles onto 9:16 video frames using FFmpeg, MoviePy, and Pillow before publishing via the YouTube Data API v3.',
          },
          {
            title: 'Technical Hurdles & Solutions',
            content: 'Dynamic caption synchronization required aligning visual text exactly with synthesized audio — solved by extracting word-level timestamps via Faster-Whisper and mathematically calculating frame-by-frame rendering states in MoviePy. Rendering high-definition video programmatically is CPU and GPU intensive; I optimized the assembly agent to balance PyTorch CUDA acceleration with refined FFmpeg parameters, reducing render times to under two minutes. API quota management was handled through efficient token caching and structured error handling.',
          },
          {
            title: 'Final Impact & Results',
            content: 'The pipeline is currently deployed and running in production on the DeclassifiedTech YouTube channel. It establishes a robust foundation for future upgrades including A/B testing integration, multilingual expansion, and migrating rendering scripts to serverless cloud functions for parallel processing.',
          },
        ],
        artifacts: [
          { label: 'Live Channel — DeclassifiedTech', href: 'https://www.youtube.com/@DeclassifiedTech' },
          { label: 'Source Code', href: '#', note: 'Closed Source' },
        ],
      },
    ],
  },
  {
    id: 'photography',
    label: 'Photography',
    number: '05',
    projects: [
      {
        id: 'exposure-explorers',
        title: 'Exposure Explorers',
        subtitle: 'Director of Photography — Visual Storytelling Through Light and Geometry',
        year: 'March 2026–Present',
        tags: ['Photography', 'Event Coverage', 'Landscape', 'Visual Direction'],
        status: 'Ongoing',
        isPhotography: true,
        sections: [
          {
            title: '',
            content: 'Photography, for me, is about noticing things before they disappear. When I\'m out with the club, I\'m less focused on the shot and more on getting people to slow down long enough to see what they were about to walk past. Some of these are shot on a camera, the rest on my iPhone 13.',
          },
        ],
        artifacts: [],
      },
    ],
  },
  {
    id: 'creative-direction',
    label: 'Creative Direction',
    number: '06',
    projects: [
      {
        id: 'convocation-magazine',
        title: 'Convocation Magazine',
        subtitle: 'Editorial & Creative Direction — 11th Convocation of NIT Goa',
        year: 'Jan 2026',
        tags: ['Editorial Design', 'Typography', 'Layout', 'Project Management'],
        status: 'Completed',
        sections: [
          {
            title: '',
            content: 'For the 11th Convocation of NIT Goa, I took on the responsibility of conceptualizing and executing the official convocation magazine alongside my friend Mayuresh. This was an intensive, month-long project that required designing and compiling a comprehensive publication spanning over 150 pages — the definitive retrospective for the graduating batch.\n\nOur workflow demanded a careful balance of visual aesthetics and editorial clarity. We managed the overarching layout, typography, and visual hierarchy while organizing department summaries and student achievements into a cohesive narrative. It was a rigorous exercise in digital design and collaborative project management, requiring strict attention to detail to ensure the final publication was polished and ready for print on a very tight deadline.',
          },
        ],
        artifacts: [],
      },
      {
        id: 'solace-writer',
        title: 'Split Verdict — Solace',
        subtitle: 'Featured Writer & Column Creator, NIT Goa Literature Club',
        year: 'Aug 2025 –Present',
        tags: ['Writing', 'Column', 'Editorial', 'Literature Club'],
        status: 'Ongoing',
        sections: [
          {
            title: '',
            content: 'As a Featured Writer for Solace, NIT Goa\'s literature club, I launched "Split Verdict" — a column structured as a head-to-head, on-paper debate. For every issue, I took one side of a given argument and invited a different reader to champion the opposing viewpoint alongside me.\n\nThis format allowed us to explore a wide variety of topics from multiple perspectives while directly involving the student body in the creative process. By bringing a new reader\'s voice into the fold for every edition, "Split Verdict" significantly boosted the newspaper\'s reach and engagement, transforming the publication from a one-way broadcast into an active, campus-wide conversation.',
          },
        ],
        artifacts: [],
      },
    ],
  },
  {
    id: 'stem-outreach',
    label: 'STEM Outreach & Community Leadership',
    number: '07',
    projects: [
      {
        id: 'spie',
        title: 'SPIE Student Chapter NIT Goa',
        subtitle: 'Member & Program Coordinator — Building Technical Community',
        year: 'Feb 2026 – Present',
        tags: ['SPIE', 'Optics & Photonics', 'Outreach', 'Event Management', 'STEM Education'],
        status: 'Ongoing',
        sections: [
          {
            title: '',
            content: 'As a Member Coordinator and Program Coordinator for the SPIE Student Chapter at NIT Goa, I managed a community of over 50 members and spearheaded initiatives aimed at bridging the gap between collegiate engineering and early STEM education.\n\nOne of our major milestones was organizing "Kalpana \'25," an interschool science exhibition tailored for 8th–10th grade students. Around the same time, I coordinated "Decrypt," an OSINT challenge held during our technical fest, Inception \'25.\n\nBeyond campus events, I was deeply involved in grassroots STEM outreach across the region — coordinating a "Women in STEM" initiative at KV Vasco, and a hands-on robotics workshop at Maria Bambina Convent High School in Cuncolim. During the robotics workshop, I took on a direct teaching role, guiding young students through Arduino basics and helping them build and program their first object-avoidance robots from scratch.\n\nServing on the council taught me how to lead with empathy and execute under pressure — from coordinating handover ceremonies to planning technical challenges that pushed our members out of their comfort zones.',
          },
        ],
        artifacts: [],
      },
      {
        id: 'ebsb',
        title: 'Ek Bharat Shreshtha Bharat',
        subtitle: 'Program Coordinator — Celebrating Culture and Heritage at NIT Goa',
        year: 'June 2025 - April 2026',
        tags: ['Cultural Exchange', 'National Program', 'Event Management', 'Leadership'],
        status: 'Ongoing',
        sections: [
          {
            title: '',
            content: 'As a Program Coordinator for the Ek Bharat Shreshtha Bharat initiative at NIT Goa, my primary mission was to foster regional cultural exchange and celebrate India\'s diverse heritage. I was responsible for bridging cultural gaps across the student body by conceptualizing and executing events that brought different traditions, arts, and histories to the forefront of campus life.\n\nOver the course of my tenure, I successfully organized and managed six distinct cultural events — requiring extensive logistical planning, from coordinating with performers and managing venue schedules to handling the promotional campaigns that drove student engagement.\n\nStepping into this role allowed me to develop a completely different skill set compared to my deep-tech engineering projects. It taught me how to manage diverse teams, handle the unpredictability of live event execution, and communicate effectively with broad audiences.',
          },
        ],
        artifacts: [],
      },
      {
        id: 'solace-treasurer',
        title: 'Treasurer, Solace',
        subtitle: 'Financial Operations & Club Management',
        year: 'Aug 2026–Present',
        tags: ['Financial Management', 'Literature Club', 'Organizational Leadership'],
        status: 'Ongoing',
        sections: [
          {
            title: '',
            content: 'Serving as the Treasurer for Solace, the official Literature Club of NIT Goa, gave me a practical crash course in financial management and organizational responsibility. While my engineering projects taught me how to build and optimize hardware, this role taught me how to manage budgets and sustain a growing student community.\n\nMy primary responsibility was overseeing the club\'s financial operations — allocating funds for the regular printing of our biweekly newspaper, securing and managing budgets for literary events, and handling the administrative coordination for reimbursements and vendor payments.\n\nBalancing the creative ambitions of a literature club with strict financial realities helped me develop a highly pragmatic approach to leadership and resource management.',
          },
        ],
        artifacts: [],
      },
    ],
  },
]

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.id === slug)

export const getProjectBySlug = (categorySlug, projectSlug) => {
  const category = getCategoryBySlug(categorySlug)
  return category?.projects.find((p) => p.id === projectSlug)
}