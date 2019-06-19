var isBoomerang = function(points) {
  
    var area = Math.abs((points[0][0]*(points[1][1]-points[2][1])+points[1][0]*(points[2][1]-points[0][1])+points[2][0]*(points[0][1]-points[1][1]))/2);

    if(area>0)return true;
    
    return false;
};