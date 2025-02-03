import { intervalListIntersections } from "./index";

describe('intervalListIntersections', () => {
    it('should return the correct intersections', () => {

        const user1 = [[8, 12], [17, 22]];
        const user2 = [[5, 11], [14, 18], [20, 23]];
    
        const result = intervalListIntersections(user1, user2);
    
        expect(result).toEqual([[8, 11], [17, 18], [20, 22]]);
    });
    it('should return an empty array if there are no intersections', () => {
        const user1 = [[1, 2], [3, 4]];
        const user2 = [[5, 6], [7, 8]];
    
        const result = intervalListIntersections(user1, user2);
    
        expect(result).toEqual([]);
    
    });
    it('should handle edge cases with empty intervals', () => {
        const user1: number[][] = [];
        const user2: number[][] = [[1, 2], [3, 4]];
    
        const result = intervalListIntersections(user1, user2);
    
        expect(result).toEqual([]);
    
    });
    it('should handle cases with overlapping intervals', () => {
        const user1 = [[1, 3], [5, 9]];
        const user2 = [[2, 4], [6, 8]];
    
        const result = intervalListIntersections(user1, user2);
    
        expect(result).toEqual([[2, 3], [6, 8]]);
    });
});
