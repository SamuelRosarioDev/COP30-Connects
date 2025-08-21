import { Pool } from 'pg';

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export async function Connection() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT NOW()');
        console.log('Database connected at:', res.rows[0].now);
    } catch (err) {
        console.error('Database connection error:', err);
    } finally {
        client.release();
    }
}