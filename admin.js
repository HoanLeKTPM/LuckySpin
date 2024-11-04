function displayUsers() {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';
    
    users.forEach(user => {
        const row = document.createElement('tr');
        const rewards = user.rewards ? user.rewards.map(p => p.reward).join(', ') : 'Chưa có';
        
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.gender === 'male' ? 'Nam' : 'Nữ'}</td>
            <td>${user.phone}</td>
            <td>${new Date(user.timestamp).toLocaleString()}</td>
            <td>${rewards}</td>
        `;
        
        userTableBody.appendChild(row);
    });
} 