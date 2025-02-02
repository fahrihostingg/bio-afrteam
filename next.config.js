const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://bio.afrteam.web.id/',
        permanent: true,
      },
      {
        source: '/alquran',
        destination: 'https://faquran.fakruldev.us.kg/',
        permanent: true,
      },
      {
        source: '/alquran2',
        destination: 'https://alquran.fakruldev.us.kg/',
        permanent: true,
      },
      {
        source: '/web',
        destination: 'https://shop.safeserver.us.kg/',
        permanent: true,
      },
      {
        source: '/mybot',
        destination: 'https://short.fakrulafif.web.id/chbot/',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/rulshz/',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/fahrihostingg1/',
        permanent: true,
      },
      {
        source: '/groupwa',
        destination: 'https://short.fakrulafif.web.id/gcbot/',
        permanent: true,
      },
      {
        source: '/api',
        destination: 'https://api.fakrulafif.web.id/',
        permanent: true,
      },
      {
        source: '/qris',
        destination: 'https://short.fakrulafif.web.id/qrisid/',
        permanent: true,
      },
      {
        source: '/qrismy',
        destination: 'https://short.fakrulafif.web.id/qrismy/',
        permanent: true,
      },
      {
        source: '/afrch',
        destination: 'https://whatsapp.com/channel/0029Vajf99IKbYMLNn7qKS3i/',
        permanent: true,
      },
        source: '/afrsupport',
        destination: 'https://short.fakrulafif.web.id/owner/',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: false // Tambahkan opsi trailingSlash di sini
}; 
