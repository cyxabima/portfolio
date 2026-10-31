export type Course = {
    code: string
    title: string
    credits: number | 'NC'
    grade?: string
}

export type SemesterStatus = 'Completed' | 'In Progress' | 'Upcoming'

export type Semester = {
    term: string
    number: number
    status: SemesterStatus
    courses: Course[]
}

export const educationProfile = {
    degree: 'Bachelor of Computer Systems Engineering',
    institution: 'NED University of Engineering & Technology',
    location: 'Karachi, Pakistan',
    duration: '2024 – 2028 (Expected)',
    standing: 'Third Year · 5th Semester in Progress',
    cgpa: '3.941',
    cgpaScale: '4.00',
    transcriptVerified: '23 June 2026'
}

export const semesters: Semester[] = [
    {
        term: 'Fall 2024',
        number: 1,
        status: 'Completed',
        courses: [
            {
                code: 'CS-115',
                title: 'Computer Programming',
                credits: 4,
                grade: 'A+'
            },
            {
                code: 'CS-114',
                title: 'Fundamentals of Computer Engineering',
                credits: 4,
                grade: 'A'
            },
            {
                code: 'EE-120',
                title: 'Basic Electrical Engineering',
                credits: 4,
                grade: 'A'
            },
            { code: 'MT-114', title: 'Calculus', credits: 3, grade: 'A' },
            {
                code: 'EA-111',
                title: 'Functional English',
                credits: 2,
                grade: 'A'
            },
            {
                code: 'ES-106',
                title: 'Pakistan Studies',
                credits: 1,
                grade: 'B'
            }
        ]
    },
    {
        term: 'Spring 2025',
        number: 2,
        status: 'Completed',
        courses: [
            {
                code: 'PH-122',
                title: 'Applied Physics',
                credits: 4,
                grade: 'A+'
            },
            {
                code: 'CS-116',
                title: 'Object Oriented Programming',
                credits: 4,
                grade: 'A'
            },
            {
                code: 'EL-103',
                title: 'Basic Electronics',
                credits: 4,
                grade: 'A'
            },
            {
                code: 'ES-206',
                title: 'Islamic Studies',
                credits: 2,
                grade: 'A'
            },
            {
                code: 'CS-117',
                title: 'Discrete Structures',
                credits: 3,
                grade: 'A-'
            }
        ]
    },
    {
        term: 'Fall 2025',
        number: 3,
        status: 'Completed',
        courses: [
            {
                code: 'CS-220',
                title: 'Digital Logic Design',
                credits: 4,
                grade: 'A+'
            },
            {
                code: 'MT-224',
                title: 'Complex Variables & Fourier Analysis',
                credits: 3,
                grade: 'A+'
            },
            {
                code: 'CS-219',
                title: 'Computer Engineering Workshop',
                credits: 1,
                grade: 'A+'
            },
            {
                code: 'CS-218',
                title: 'Data Structures and Algorithms',
                credits: 4,
                grade: 'A'
            },
            {
                code: 'EA-218',
                title: 'Business Communication',
                credits: 3,
                grade: 'A'
            },
            { code: 'EE-217', title: 'Circuit Theory', credits: 2, grade: 'A' }
        ]
    },
    {
        term: 'Spring 2026',
        number: 4,
        status: 'Completed',
        courses: [
            {
                code: 'CS-221',
                title: 'Computer Organization & Design',
                credits: 4,
                grade: 'A'
            },
            {
                code: 'CS-222',
                title: 'Database Management Systems',
                credits: 4,
                grade: 'A'
            },
            {
                code: 'CS-215',
                title: 'Signals and Systems',
                credits: 3,
                grade: 'A'
            },
            {
                code: 'EA-219',
                title: 'Professional Ethics',
                credits: 2,
                grade: 'A'
            },
            {
                code: 'MT-222',
                title: 'Linear Algebra & Ordinary Differential Equations',
                credits: 3,
                grade: 'A-'
            },
            {
                code: 'EA-200',
                title: 'Community Service',
                credits: 'NC',
                grade: 'Completed'
            }
        ]
    },
    {
        term: 'Fall 2026',
        number: 5,
        status: 'In Progress',
        courses: [
            {
                code: 'CS-328',
                title: 'Computer Architecture',
                credits: 3
            },
            {
                code: 'CS-327',
                title: 'Computer Communication Networks',
                credits: 4
            },
            {
                code: 'CS-326',
                title: 'Software Engineering',
                credits: 4
            },
            {
                code: 'CS-323',
                title: 'Artificial Intelligence',
                credits: 4
            },
            {
                code: 'MT-335',
                title: 'Probability and Statistics',
                credits: 3
            }
        ]
    },
    {
        term: 'Spring 2027',
        number: 6,
        status: 'Upcoming',
        courses: [
            { code: 'CS-329', title: 'Operating Systems', credits: 4 },
            {
                code: 'CS-301',
                title: 'Microprocessor Based System Design',
                credits: 4
            },
            {
                code: 'Elective-I',
                title: 'Departmental Elective I',
                credits: 4
            },
            { code: 'MT-442', title: 'Numerical Methods', credits: 3 },
            {
                code: 'EF-305',
                title: 'Engineering Economics & Management',
                credits: 3
            },
            {
                code: 'EA/ES-###',
                title: 'Foreign Language-I',
                credits: 'NC'
            }
        ]
    }
]

export const coreCoursework = [
    { title: 'Computer Programming', grade: 'A+' },
    { title: 'Object Oriented Programming', grade: 'A' },
    { title: 'Digital Logic Design', grade: 'A+' },
    { title: 'Data Structures and Algorithms', grade: 'A' },
    { title: 'Computer Organization & Design', grade: 'A' },
    { title: 'Database Management Systems', grade: 'A' }
]

export const honors = [
    'Track 2 Finalist, International Space Science and Scientific Payload Competition (ISSSP 2026)',
    'Co-Director of Technology Domain, IEEE NED Student Branch'
]

export function semesterCredits(semester: Semester) {
    return semester.courses.reduce(
        (total, course) =>
            total + (typeof course.credits === 'number' ? course.credits : 0),
        0
    )
}

export const completedCredits = semesters
    .filter(semester => semester.status === 'Completed')
    .reduce((total, semester) => total + semesterCredits(semester), 0)
