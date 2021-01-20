INSERT INTO history (
    link,
    user_id
)

VALUES($1, $2);

SELECT * FROM history 
WHERE user_id = $2;