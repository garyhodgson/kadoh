exports.util = {
  crypto              : require('./util/crypto'),
  EventEmitter        : require('./util/eventemitter'),
  StateEventEmitter   : require('./util/state-eventemitter'),
  Deferred            : require('./util/deferred'),
  PeerArray           : require('./util/peerarray'),
  SortedPeerArray     : require('./util/sorted-peerarray'),
  XORSortedPeerArray  : require('./util/xorsorted-peerarray'),
  IterativeDeferred   : require('./util/iterative-deferred')
};

exports.globals = require('./globals');

exports.logic = {
  KademliaNode        : require('./node'),
  Bootstrap           : require('./bootstrap')
};

exports.network = {
  Reactor             : require('./network/reactor'),
  rpc : {
    RPC               : require('./network/rpc/rpc'),
    Ping              : require('./network/rpc/ping'),
    FindNode          : require('./network/rpc/findnode'),
    FindValue         : require('./network/rpc/findvalue'),
    Store             : require('./network/rpc/store')
  },
  transport : {
    UDP               : require('./network/transport/udp')
  },
  protocol: {
    jsonrpc2          : require('./network/protocol/jsonrpc2')
  }
};

exports.dht = {
  RoutingTable        : require('./dht/routing-table'),
  KBucket             : require('./dht/kbucket'),
  Peer                : require('./dht/peer'),
  BootstrapPeer       : require('./dht/bootstrap-peer'),
  IterativeFindNode   : require('./dht/iterativefind/iterative-findnode'),
  IterativeFindValue  : require('./dht/iterativefind/iterative-findvalue')
};

exports.data = {
  ValueStore          : require('./data/value-store'),
  storage : {
    Memory             : require('./data/storage/memory'),
    Nstore             : require('./data/storage/nstore')
  }
};

exports.logger = {
  logging : require('./logging'),
  LogEmitter : require('./logger/logemitter'),
  reporter : {
    Console : require('./logger/reporter/color-console')
  }
};