function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number' || denominator === 0)
        throw new Error("Invalid numerator or denominator");
    else
        return numerator / denominator;
}

try {
    console.log(divide(4, 2));
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(2, 2));
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(2, 4));
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(-1, 3));
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(4, 0));
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(0, 2));
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide("sdf", 2));
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(2, '2'));
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Робота завершена');
}

