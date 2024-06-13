import { COURSE_DATA } from "../constants/courseData";

export const getFilteredCourseData = (min, max, sortBy='asc') => {
    return COURSE_DATA.filter(data => {
        if('completionPercentage' in data) {
            return data.completionPercentage >= min && data.completionPercentage <= max
        }
        return false;
    })
    .sort((a, b) => {
        return sortBy === 'desc'? (b.completionPercentage - a.completionPercentage) :(a.completionPercentage - b.completionPercentage)
    })
}