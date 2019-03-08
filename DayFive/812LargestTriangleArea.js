var largestTriangleArea = function(points) {
    let ans = 0;
    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i+1; j < points.length - 1; j++) {
            for (let k = j+1; k < points.length; k++) {
                ans = Math.max(ans, help(points[i], points[j], points[k]))
            }
        }
    }
    return ans;
};

var help = function(p1, p2, p3) {
    return 0.5 * Math.abs(p1[0]*p2[1] + p2[0]*p3[1] + p3[0]*p1[1] - p2[0]*p1[1] - p3[0]*p2[1] - p1[0]*p3[1]);
}