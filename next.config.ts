import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts'); // <- your path here
export default withNextIntl(nextConfig);
