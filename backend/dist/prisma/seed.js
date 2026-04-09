import { PrismaClient } from '../src/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
    console.log('🌱 Seeding database...');
    const tracks = await Promise.all([
        prisma.track.upsert({
            where: { id: 'track-ai-ml' },
            update: {},
            create: {
                id: 'track-ai-ml',
                name: 'AI / Machine Learning',
                description: 'Master the fundamentals and advanced concepts of Artificial Intelligence and Machine Learning. Build real-world AI applications.',
            },
        }),
        prisma.track.upsert({
            where: { id: 'track-fullstack' },
            update: {},
            create: {
                id: 'track-fullstack',
                name: 'Full-Stack Software Development',
                description: 'Learn frontend and backend development with modern frameworks. Build and deploy production-ready web applications.',
            },
        }),
        prisma.track.upsert({
            where: { id: 'track-cybersecurity' },
            update: {},
            create: {
                id: 'track-cybersecurity',
                name: 'Cybersecurity',
                description: 'Understand offensive and defensive security practices. Learn penetration testing, vulnerability assessment, and security hardening.',
            },
        }),
        prisma.track.upsert({
            where: { id: 'track-network-hacking' },
            update: {},
            create: {
                id: 'track-network-hacking',
                name: 'Network Hacking',
                description: 'Deep dive into network protocols, exploitation techniques, and ethical hacking methodologies.',
            },
        }),
    ]);
    console.log(`✅ Created ${tracks.length} tracks`);
    for (const track of tracks) {
        const existingModules = await prisma.module.count({
            where: { trackId: track.id },
        });
        if (existingModules === 0) {
            await prisma.module.createMany({
                data: [
                    {
                        trackId: track.id,
                        title: `${track.name} — Foundations`,
                        orderIndex: 1,
                    },
                    {
                        trackId: track.id,
                        title: `${track.name} — Intermediate Concepts`,
                        orderIndex: 2,
                    },
                    {
                        trackId: track.id,
                        title: `${track.name} — Advanced Topics`,
                        orderIndex: 3,
                    },
                    {
                        trackId: track.id,
                        title: `${track.name} — Capstone Project`,
                        orderIndex: 4,
                    },
                ],
            });
            console.log(`  📦 Created 4 modules for ${track.name}`);
        }
    }
    console.log('🎉 Seed complete!');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map