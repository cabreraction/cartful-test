// script was developed and tested with this page -> https://littlesleepies.com/products/rust-rainbows-bamboo-viscose-zippy

(function modifyPage() {

  function getAppropriateMessage() {
    // get the form so that we can get the value
    const forms = [...document.getElementsByTagName('form')]
    // not using the full id because there's no guarantee it will always be the same
    const filteredForms = forms.filter(f => f.getAttribute('id').includes('product_form'))
    if (!filteredForms || filteredForms.length < 1) {
      return ''
    }

    const relevantForm = filteredForms[0];
    const formData = new FormData(relevantForm);
    const quantityValue = Number(formData.get('quantity'));

    if (quantityValue === 1) {
      return 'Add two of this product and the third one is for free';
    } else if (quantityValue === 2) {
      return 'Add another one free to your cart.';
    } else if (quantityValue === 3) {
      return 'Congrats! add to cart now!';
    } else if (quantityValue > 3) {
      return ''
    }
  }

  function showMessage() {
    // check if the message is already there
    const saleMessage = document.getElementById('dynamicSaleMessage');
    if (saleMessage) {
      return;
    }

    // because i dont know if this reference exists in every single page
    const divs = document.getElementsByClassName('tw-w-full tw-my-5');
    if (!divs || divs.length < 1) {
      return;
    }
    
    // if the message is not there and the reference to insert exists
    const reference = divs[0];
    let parentDiv = reference.parentNode;
    let message = document.createElement('p');
    message.setAttribute('id', 'dynamicSaleMessage');
    message.setAttribute('style', 'background:#b2fce4;width:fit-content;')
    const text = getAppropriateMessage()
    message.innerText = text;
    parentDiv.insertBefore(message, reference);
  }
      
  function changeMessage() { 
    const text = getAppropriateMessage();
    
    const message = document.getElementById('dynamicSaleMessage');
    if (!message) {
      return
    }

    message.innerText = text;
  }
  
  // events related to showing the message
  const labels = [...document.getElementsByTagName('label')]
  const fileteredLabels = labels.filter(label => 
    label.textContent.trim() === '18-24 months'
    || label.textContent.trim() === '2T'
    || label.textContent.trim() === '3T'
  );
  fileteredLabels.forEach(element => element.addEventListener('click', showMessage))
  
  // events related to changing the message content
  const decrementButton = document.querySelector('[aria-label="Decrement"]');
  const incrementButton = document.querySelector('[aria-label="Increment"]');
  if (decrementButton) {
    decrementButton.addEventListener('click', changeMessage);
  }
  if (incrementButton) {
    incrementButton.addEventListener('click', changeMessage);
  }
})()