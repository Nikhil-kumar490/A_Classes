let contacts = [];

function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    if(name === '' || phone === '') {
        alert('Please fill out both fields');
        return;
    }
    
    const contact = { name, phone };
    contacts.push(contact);
    renderContacts();
    
    nameInput.value = '';
    phoneInput.value = '';
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

function renderContacts() {
    const contactsContainer = document.getElementById('contacts');
    contactsContainer.innerHTML = '';
    
    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact';
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = contact.name;
        
        const phoneSpan = document.createElement('span');
        phoneSpan.className = 'phone';
        phoneSpan.textContent = contact.phone;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteContact(index);
        
        contactDiv.appendChild(nameSpan);
        contactDiv.appendChild(phoneSpan);
        contactDiv.appendChild(deleteButton);
        
        contactsContainer.appendChild(contactDiv);
    });
}