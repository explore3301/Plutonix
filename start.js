const { token } = require('./settings/config.js');
const { ClusterManager } = require('discord-hybrid-sharding');

const manager = new ClusterManager('./index.js', {
  totalShards: 3,
  shardsPerClusters: 2,
  mode: 'process',
  token: token
});

manager.on('clusterCreate', cluster => console.log(`Launched Cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });