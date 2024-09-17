document.getElementById('love-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const score = calculateLoveScore(name1, name2);
    const message = getLoveMessage(score);
    document.getElementById('score').textContent = score + '%';
    document.getElementById('message').textContent = message;
    document.getElementById('result').classList.remove('hidden');
});

function calculateLoveScore(name1, name2) {
    const combinedNames = (name1 + name2).toLowerCase();
    let score = 0;
    for (let i = 0; i < combinedNames.length; i++) {
        score += combinedNames.charCodeAt(i);
    }
    return (score % 100);
}

function getLoveMessage(score) {
    if (score > 80) {
        return 'You are a perfect match!';
    } else if (score > 50) {
        return 'You have potential!';
    } else {
        return 'It might be a challenging relationship.';
    }
}
