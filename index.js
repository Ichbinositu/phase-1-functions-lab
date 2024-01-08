function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup) {
    let blocksFromHq = distanceFromHqInBlocks(pickup);
    return blocksFromHq * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    }

    if (distance <= 2000) {
        return (distance - 400) * 0.02 + 0;
    }

    if (distance <= 2500) {
        return 25;
    }

    return 'cannot travel that far';
}
