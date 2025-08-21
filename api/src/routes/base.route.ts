import type { FastifyPluginAsync } from "fastify";
import packageJson from "../../package.json" with { type: "json" };

export const baseRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get("/", async () => {
        const { name, version, description, author } = packageJson;
        return { name, version, description, author };
    });
};
