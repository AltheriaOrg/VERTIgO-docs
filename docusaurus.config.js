// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'VERTIgO Docs',
    tagline: 'A documentation website for the VERTIgO project',
    favicon: 'img/VERTIgO-logo.png',

    // Set the production url of your site here
    url: 'https://eesp.altheria.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'AltheriaOrg', // Usually your GitHub org/user name.
    projectName: 'VERTIgO-docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'VERTIgO Docs',
                logo: {
                    alt: 'VERTIgO Logo',
                    src: 'img/VERTIgO-logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'eesp-editor/General',
                        position: 'left',
                        label: 'Eesp editor',
                    },

                    {
                        type: 'doc',
                        docId: 'trainer-web-app/General',
                        position: 'left',
                        label: 'Trainer web app',
                    },
                    {
                        type: 'doc',
                        docId: 'eesp-trainer-view/General',
                        position: 'left',
                        label: 'Eesp trainer view',
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'VERTIgO Project',
                        items: [
                            {
                                label: 'Website',
                                href: 'https://cbrn-vertigo.eu/',
                            },
                        ]
                    },
                    {
                        title: 'Technical partners',
                        items: [
                            {
                                label: 'Altheria Solutions',
                                href: 'https://altheria.com/',
                            },
                            {
                                label: 'Safe foundation',
                                href: 'https://www.safe-europe.eu/',
                            },
                            {
                                label: 'LINKS Foundation',
                                href: 'https://www.linksfoundation.com/',
                            },
                            {
                                label: 'MESTEL SAFETY',
                                href: 'https://www.mestelsafety.com/',
                            },
                            {
                                label: 'Austrian Institute of Technology (AIT)',
                                href: 'https://www.ait.ac.at/',
                            },
                            {
                                label: 'Institute for International Affairs (IAI)',
                                href: 'https://www.iai.it/',
                            },
                            {
                                label: 'University of Rome Tor Vergata',
                                href: 'https://www.uniroma2.it/',
                            },
                            {
                                label: 'Joint NBC School',
                                href: 'https://www.difesa.it/EN/SMD/JMI/CBRN/Pagine/default.aspx',
                            },
                            {
                                label: 'ENEA',
                                href: 'https://www.enea.it/en',
                            }
                        ],
                    }
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
