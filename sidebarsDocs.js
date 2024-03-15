/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Introduction',
    },
    {
      type: 'link',
      label: 'Release Information',
      href: '/release-information'
    },
    {
      type: 'link',
      label: 'Getting Started',
      href: '/tutorials'
    },
    {
      type: 'category',
      label: 'Install and Upgrade',
      link: {type: 'doc', id: 'download'},
      items: [
        {
          type: 'doc',
          id: 'which-erlang',
          label: 'Erlang Version Requirements',
        },
        {
          type: 'doc',
          id: 'signatures',
          label: 'Package Signatures',
        },
        {
          type: 'category',
          label: 'Supported Operating Systems',
          link: {type: 'doc', id: 'platforms'},
          items: [
            {
              type: 'category',
              label: 'Linux/Unix',
              items: [
                {
                  type: 'doc',
                  id: 'install-debian',
                  label: 'Debian and Ubuntu',
                },
                {
                  type: 'doc',
                  id: 'install-rpm',
                  label: 'RedHat',
                },
                {
                  type: 'doc',
                  id: 'install-generic-unix',
                  label: 'Generic Unix',
                },
              ],
            },
            {
              type: 'doc',
              id: 'install-windows',
              label: 'Windows',
            },
            {
              type: 'category',
              label: 'MacOS',
              items: [
                {
                  type: 'doc',
                  id: 'install-standalone-mac',
                  label: 'MacOS using Standalone Binary Build',
                },
                {
                  type: 'doc',
                  id: 'install-homebrew',
                  label: 'MacOs using Homebrew',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          link: {type: 'doc', id: 'upgrade'},
          items: [
            {
              type: 'doc',
              id: 'feature-flags',
              label: 'Feature Flags',
            },
            {
              type: 'doc',
              id: 'blue-green-upgrade',
              label: 'Blue-Green Upgrade',
            },
          ],
        },
        {
          type: 'doc',
          id: 'snapshots',
          label: 'Snapshots',
        },
      ],
    },
    {
      type: 'category',
      label: 'How to Use RabbitMQ',
      items: [
        {
          type: 'category',
          label: 'Publishing Messages',
          link: {type: 'doc', id: 'publishers'},
          items: [
            {
              type: 'doc',
              id: 'direct-reply-to',
              label: 'Direct reply-to',
            },
            {
              type: 'doc',
              id: 'connection-blocked',
              label: 'Blocked Connection Notifications',
            },
            {
              type: 'doc',
              id: 'e2e',
              label: 'Exchange to Exchange Bindings',
            },
            {
              type: 'doc',
              id: 'ae',
              label: 'Alternative Exchanges',
            },
            {
              type: 'doc',
              id: 'sender-selected',
              label: 'Sender-selected Distribution',
            },
            {
              type: 'doc',
              id: 'validated-user-id',
              label: 'Validated User ID',
            },
          ],
        },
        {
          type: 'category',
          label: 'Consuming Messages',
          link: {type: 'doc', id: 'consumers'},
          items: [
            {
              type: 'doc',
              id: 'consumer-cancel',
              label: 'Consumer Cancellation Notifications',
            },
            {
              type: 'doc',
              id: 'consumer-prefetch',
              label: 'Consumer Prefetch',
            },
            {
              type: 'doc',
              id: 'consumer-priority',
              label: 'Consumer Priorites',
            },
            {
              type: 'doc',
              id: 'nack',
              label: 'Negative Acknowledgements',
            },
          ],
        },
        {
          type: 'category',
          label: 'Queues',
          link: {type: 'doc', id: 'queues'},
          items: [
            {
              type: 'doc',
              id: 'quorum-queues',
              label: 'Quorum Queues',
            },
            {
              type: 'doc',
              id: 'classic-queues',
              label: 'Classic Queues',
            },
            {
              type: 'doc',
              id: 'ha',
              label: 'Mirrored Classic Queues',
            },
            {
              type: 'doc',
              id: 'migrate-mcq-to-qq',
              label: 'Migrate Mirrored Classic Queues to Quorum Queues',
            },
            {
              type: 'doc',
              id: 'ttl',
              label: 'Time-to-Live and Expiration',
            },
            {
              type: 'doc',
              id: 'maxlength',
              label: 'Queue Length',
            },
            {
              type: 'doc',
              id: 'lazy-queues',
              label: 'Lazey Queues',
            },
            {
              type: 'doc',
              id: 'dlx',
              label: 'Dead Lettering',
            },
            {
              type: 'doc',
              id: 'priority',
              label: 'Priority Queues',
            },
          ],
        },
        {
          type: 'doc',
          id: 'streams',
          label: 'Streams',
        },
        {
          type: 'doc',
          id: 'channels',
          label: 'Channels',
        },
        {
          type: 'doc',
          id: 'reliability',
          label: 'Reliability and Data Safety',
        },
        {
          type: 'doc',
          id: 'confirms',
          label: 'Consumer Acknowledgements and Publisher Confirms',
        },
        {
          type: 'doc',
          id: 'distributed',
          label: 'Network Distribution',
        },
        {
          type: 'category',
          label: 'Plugins',
          link: {type: 'doc', id: 'plugins'},
          items: [
            {
              type: 'doc',
              id: 'management',
              label: 'Management Plugin',
            },
            {
              type: 'category',
              label: 'Federation Plugin',
              link: {type: 'doc', id: 'federation'},
              items: [
                {
                  type: 'doc',
                  id: 'federated-exchanges',
                  label: 'Federated Exchanges',
                },
                {
                  type: 'doc',
                  id: 'federated-queues',
                  label: 'Federated Queues',
                },
                {
                  type: 'doc',
                  id: 'federation-reference',
                  label: 'Federation Reference',
                },
              ],
            },
            {
              type: 'category',
              label: 'Shovel Plugin',
              link: {type: 'doc', id: 'shovel'},
              items: [
                {
                  type: 'doc',
                  id: 'shovel-static',
                  label: 'Static Shovels',
                },
                {
                  type: 'doc',
                  id: 'shovel-dynamic',
                  label: 'Dynamic Shovels',
                },
              ],
            },
            {
              type: 'doc',
              id: 'stream',
              label: 'Stream Plugin',
            },
            {
              type: 'doc',
              id: 'stomp',
              label: 'STOMP Plugin',
            },
            {
              type: 'doc',
              id: 'web-stomp',
              label: 'Web STOMP Plugin',
            },
            {
              type: 'doc',
              id: 'mqtt',
              label: 'MQTT Plugin',
            },
            {
              type: 'doc',
              id: 'web-mqtt',
              label: 'Web MQTT Plugin',
            },
            {
              type: 'doc',
              id: 'stream',
              label: 'Stream Plugin',
            },
            {
              type: 'doc',
              id: 'installing-plugins',
              label: 'Installing 3rd-party Plugins',
            },
          ],
        },
        {
          type: 'category',
          label: 'Protocols',
          link: {type: 'doc', id: 'protocols'},
          items: [
            {
              type: 'doc',
              id: 'connections',
              label: 'Connections',
            },
            {
              type: 'doc',
              id: 'conversions',
              label: 'Inter-Protocol Property Conversion',
            },
            {
              type: 'doc',
              id: 'heartbeats',
              label: 'Heartbeats',
            },
            {
              type: 'doc',
              id: 'extensions',
              label: 'Protocol Extensions',
            },
          ]
        },
        {
          type: 'link',
          label: 'Client Libraries',
          href: '/client-libraries'
        },
      ],
    },
    {
      type: 'category',
      label: 'How to Manage RabbitMQ',
      items: [
        {
          type: 'doc',
          id: 'cli',
          label: 'CLI',
        },
        {
          type: 'doc',
          id: 'configure',
          label: 'Configuration',
        },
        {
          type: 'doc',
          id: 'relocate',
          label: 'File Directory and Locations',
        },
        {
          type: 'doc',
          id: 'logging',
          label: 'Logging',
        },
        {
          type: 'doc',
          id: 'vhosts',
          label: 'Virtual Hosts',
        },
        {
          type: 'category',
          label: ' Authentication and Authorization',
          link: {type: 'doc', id: 'access-control'},
          items: [
            {
              type: 'doc',
              id: 'authentication',
              label: 'AMQP 0-9-1 Authentication Mechanisms',
            },
            {
              type: 'doc',
              id: 'passwords',
              label: 'Credentials and Passwords',
            },
            {
              type: 'doc',
              id: 'oauth2',
              label: 'OAuth 2 Support',
            },
            {
              type: 'doc',
              id: 'oauth2-examples',
              label: 'OAuth 2 Examples',
            },
            {
              type: 'doc',
              id: 'ldap',
              label: 'LDAP',
            },
            {
              type: 'doc',
              id: 'auth-notification',
              label: 'Authentication Failure Notifications',
            },
            {
              type: 'doc',
              id: 'user-limits',
              label: 'Per User Resource Limits'
            },
          ],
        },
        {
          type: 'doc',
          id: 'parameters',
          label: 'Policies and Runtime Parameters',
        },
        {
          type: 'doc',
          id: 'definitions',
          label: 'Schema Definitions',
        },
        {
          type: 'category',
          label: 'Networking',
          link: {type: 'doc', id: 'networking'},
          items: [
            {
              type: 'doc',
              id: 'nettick',
              label: 'Net Tick Time',
            },
            {
              type: 'doc',
              id: 'ssl',
              label: 'TLS Support',
            },
            {
              type: 'doc',
              id: 'troubleshooting-networking',
              label: 'Troubleshooting Connectivity',
            },
            {
              type: 'doc',
              id: 'troubleshooting-ssl',
              label: 'Troubleshooting TLS',
            },
          ],
        },
        {
          type: 'category',
          label: 'Clustering',
          link: {type: 'doc', id: 'clustering'},
          items: [
            {
              type: 'doc',
              id: 'cluster-formation',
              label: 'Cluster Formation',
            },
            {
              type: 'doc',
              id: 'partitions',
              label: 'Network Partitions',
            },
            {
              type: 'doc',
              id: 'clustering-ssl',
              label: 'Using TLS for Inter-node Traffic',
            },
            {
              type: 'doc',
              id: 'ec2',
              label: 'RabbitMQ on Amazon EC2',
            },
          ],
        },
        {
          type: 'category',
          label: 'Resource Management',
          items: [
            {
              type: 'doc',
              id: 'memory-use',
              label: 'Analyzing how Memory is Used',
            },
            {
              type: 'category',
              label: 'Memory and Disk Alarms',
              link: {type: 'doc', id: 'alarms'},
              items: [
                {
                  type: 'doc',
                  id: 'memory',
                  label: 'Memory Alarms',
                },
                {
                  type: 'doc',
                  id: 'disk-alarms',
                  label: 'Disk Alarms',
                },
              ],
            },
            {
              type: 'doc',
              id: 'flow-control',
              label: 'Flow Control',
            },
          ],
        },
        {
          type: 'doc',
          id: 'backup',
          label: 'Backup and Restore',
        },
        {
          type: 'category',
          label: 'Tuning',
          items: [
            {
              type: 'doc',
              id: 'runtime',
              label: 'Runtime Tuning'
            },
            {
              type: 'doc',
              id: 'persistence-conf',
              label: 'Persistence Configuration'
            },
          ],
        },
        {
          type: 'doc',
          id: 'production-checklist',
          label: 'Deployment Guidelines'
        },
        {
          type: 'doc',
          id: 'troubleshooting',
          label: 'Troubleshooting RabbitMQ'
        },
      ],
    },
    {
      type: 'category',
      label: 'How to Monitor RabbitMQ',
      link: {type: 'doc', id: 'monitoring'},
      items: [
        {
          type: 'doc',
          id: 'prometheus',
          label: 'Prometheus and Grafana',
        },
        {
          type: 'doc',
          id: 'event-exchange',
          label: 'Event Exchange Plugin',
        },
        {
          type: 'doc',
          id: 'firehose',
          label: 'Firehose Tracing',
        },
      ],
    },
  ],
};

export default sidebars;
