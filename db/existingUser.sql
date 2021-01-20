SELECT u.id, u.email, ua.hash FROM users u
JOIN users_auth ua ON u.id = ua.user_id
WHERE u.email = $1;
