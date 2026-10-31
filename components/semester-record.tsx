import {
    semesterCredits,
    semesters,
    type Course,
    type Semester
} from '@/lib/education'

function courseGrade(course: Course, semester: Semester) {
    if (course.grade) return course.grade
    if (semester.status === 'In Progress') return 'In progress'
    return 'Planned'
}

export default function SemesterRecord() {
    return (
        <div className='mt-16'>
            <h2 className='title'>Semester Record</h2>
            <p className='text-foreground/70 mt-4 max-w-2xl text-[15px] leading-7'>
                Coursework completed through Spring 2026, with Fall 2026 in
                progress and Spring 2027 planned.
            </p>

            <div className='mt-10 space-y-12'>
                {semesters.map(semester => (
                    <section key={semester.term}>
                        <div className='border-border flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b pb-3'>
                            <h3 className='font-serif text-lg font-semibold'>
                                {semester.term}
                            </h3>
                            <p className='meta'>
                                Semester {semester.number} · {semester.status} ·{' '}
                                {semesterCredits(semester)} cr
                            </p>
                        </div>

                        <table className='w-full text-left'>
                            <thead className='sr-only'>
                                <tr>
                                    <th scope='col'>Code</th>
                                    <th scope='col'>Course</th>
                                    <th scope='col'>Credits</th>
                                    <th scope='col'>Grade</th>
                                </tr>
                            </thead>
                            <tbody className='divide-border divide-y'>
                                {semester.courses.map(course => (
                                    <tr
                                        key={course.code}
                                        className='align-baseline'
                                    >
                                        <td className='meta hidden w-[5.5rem] py-3 pr-3 align-baseline sm:table-cell'>
                                            {course.code}
                                        </td>
                                        <td className='text-foreground/80 py-3 pr-4 text-[15px] leading-6'>
                                            <span className='meta mb-0.5 block text-[11px] sm:hidden'>
                                                {course.code}
                                            </span>
                                            {course.title}
                                        </td>
                                        <td className='text-muted-foreground w-[3rem] py-3 text-right text-[13px] tabular-nums sm:w-[4.5rem]'>
                                            {course.credits}
                                        </td>
                                        <td className='text-muted-foreground w-[5rem] py-3 pl-4 text-right text-[13px] sm:w-[6.5rem]'>
                                            {courseGrade(course, semester)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                ))}
            </div>
        </div>
    )
}
