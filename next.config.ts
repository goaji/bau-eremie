import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactCompiler is disabled: it makes Turbopack spawn a Babel worker process,
  // which Hostinger's build environment kills ("node process exited before we could connect").
};

export default nextConfig;
