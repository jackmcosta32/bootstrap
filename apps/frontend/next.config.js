//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { createSecureHeaders } = require('next-secure-headers');
const withBundleAnalyzer = require('@next/bundle-analyzer');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          // HSTS Preload: https://hstspreload.org/
          forceHTTPSRedirect: [
            true,
            { maxAge: 86_400_000, includeSubDomains: true, preload: true },
          ],
        }),
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }),
];

module.exports = composePlugins(...plugins)(nextConfig);
