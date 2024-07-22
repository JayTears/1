function addAsset() {
    const assetName = document.getElementById('asset-name').value;
    if (assetName.trim() === '') {
        alert('Please enter an asset name.');
        return;
    }

    const portfolio = document.getElementById('portfolio');

    const assetDiv = document.createElement('div');
    assetDiv.className = 'asset';

    const assetTitle = document.createElement('h2');
    assetTitle.textContent = assetName;

    const coinCount = document.createElement('p');
    coinCount.textContent = 'Coins: 0';
    coinCount.className = 'coin-count';

    const coinInput = document.createElement('input');
    coinInput.type = 'number';
    coinInput.value = 1;
    coinInput.min = 1;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Coins';
    addButton.onclick = () => updateCoins(coinCount, parseInt(coinInput.value));

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Coins';
    removeButton.onclick = () => updateCoins(coinCount, -parseInt(coinInput.value));

    assetDiv.appendChild(assetTitle);
    assetDiv.appendChild(coinCount);
    assetDiv.appendChild(coinInput);
    assetDiv.appendChild(addButton);
    assetDiv.appendChild(removeButton);

    portfolio.appendChild(assetDiv);

    document.getElementById('asset-name').value = '';
}

function updateCoins(coinCountElement, change) {
    let currentCount = parseInt(coinCountElement.textContent.split(': ')[1]);
    currentCount += change;
    if (currentCount < 0) {
        currentCount = 0;
    }
    coinCountElement.textContent = `Coins: ${currentCount}`;
}