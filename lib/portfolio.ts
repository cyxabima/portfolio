export const profile = {
    name: 'Ukasha Anwer Ali',
    role: 'Computer Systems Engineering Undergraduate',
    location: 'Karachi, Pakistan',
    email: 'ukashaanwerali@gmail.com',
    github: 'https://github.com/cyxabima',
    linkedin: 'https://www.linkedin.com/in/ukashaanwerali',
    x: 'https://x.com/UkashAnwer',
    tagline:
        'Focused on the boundary between computer architecture, operating systems, and networked backend infrastructure. Building concurrent services, hardware-level implementations, and production systems in C, Go, Python, and TypeScript.'
}

export const aboutParagraphs = [
    'I am a third-year Computer Systems Engineering undergraduate at NED University of Engineering and Technology in Karachi (3.941/4.00 CGPA).',
    'My engineering work started in full-stack and backend systems using TypeScript, Python, and PostgreSQL, where I architected and shipped production platforms for healthcare, enterprise inventory, and academic archiving. Working inside high-level runtimes made me curious about the mechanisms hidden beneath those abstractions: how concurrent work is scheduled, how memory layout impacts throughput, and how data moves across hardware and network stacks.',
    'Today, my core interests span Operating Systems, Computer Architecture, Compilers, Distributed & Parallel Systems, and Systems Security. Strong coursework grades in Computer Organization & Design, Digital Logic Design, and Electronics, combined with hands-on work in C, Go, and RISC-V assembly, keep my focus on building software where performance, concurrency, and resource isolation matter.'
]

export type CurrentFocusItem = {
    title: string
    stack: string
    description: string
}

export const currentFocus: CurrentFocusItem[] = [
    {
        title: 'In-Kernel Packet Processing',
        stack: 'eBPF / XDP',
        description:
            'Prototyping driver- and generic-mode XDP hooks in C with a Go (cilium/ebpf) control plane to study per-IP rate limiting and sk_buff allocation overhead.'
    },
    {
        title: 'Custom P2P Socket Transport',
        stack: 'Go',
        description:
            'Developing a peer-to-peer transport package and file-distribution testbed over TCP/UDP sockets for Computer Communication Networks coursework.'
    }
]

export type SkillTier = {
    label: string
    items: string[]
}

export const skillTiers: SkillTier[] = [
    {
        label: 'Languages',
        items: [
            'C',
            'Go',
            'Python',
            'TypeScript',
            'C++',
            'RISC-V Assembly',
            'SQL',
            'Bash'
        ]
    },
    {
        label: 'Systems, Architecture & Networking',
        items: [
            'Linux Kernel & eBPF/XDP (cilium/ebpf)',
            'TCP/UDP Socket Programming',
            'Computer Architecture',
            'Digital Logic & FSM Design',
            'Concurrency & Worker Pools'
        ]
    },
    {
        label: 'Backend & Data Infrastructure',
        items: [
            'PostgreSQL',
            'Redis',
            'Docker',
            'Nginx',
            'FastAPI',
            'Node.js / Express',
            'REST APIs',
            'Drizzle ORM',
            'SQLModel',
            'SQLC'
        ]
    },
    {
        label: 'Environment & Toolchain',
        items: [
            'Arch Linux (Wayland / Hyprland)',
            'Neovim',
            'Git',
            'LLVM / Clang',
            'GNU Make'
        ]
    }
]

export const contactBlurb =
    'Open to research collaborations, systems engineering internships, and backend infrastructure work.'
