var isMonotonic = function(A) {
    let increment = true;
    let decrement = true;
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] < A[i]) decrement = false;
        if (A[i-1] > A[i]) increment = false;
    }
    return increment || decrement;
};