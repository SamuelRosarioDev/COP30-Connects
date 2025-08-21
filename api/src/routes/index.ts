import type { FastifyPluginAsync } from "fastify";
import { baseRoutes } from "./base.route";

export const routes: FastifyPluginAsync = async (fastify) => {
    await fastify.register(baseRoutes);
};