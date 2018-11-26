export function findProtocol(protocolId) {
    var list = ['HOPOPT',
    'ICMP',
    'IGMP',
    'GGP',
    'IP-in-IP',
    'ST',
    'TCP',
    'CBT',
    'EGP',
    'IGP',
    'BBN-RCC-MON',
    'NVP-II',
    'PUP',
    'ARGUS',
    'EMCON',
    'XNET',
    'CHAOS',
    'UDP',
    'MUX',
    'DCN-MEAS',
    'HMP',
    'PRM',
    'XNS-IDP',
    'TRUNK-1',
    'TRUNK-2',
    'LEAF-1',
    'LEAF-2',
    'RDP',
    'IRTP',
    'ISO-TP4',
    'NETBLT',
    'MFE-NSP',
    'MERIT-INP',
    'DCCP',
    '3PC',
    'IDPR',
    'XTP',
    'DDP',
    'IDPR-CMTP',
    'TP++',
    'IL',
    'IPv6',
    'SDRP',
    'IPv6-Route',
    'IPv6-Frag',
    'IDRP',
    'RSVP',
    'GREs',
    'DSR',
    'BNA',
    'ESP',
    'AH',
    'I-NLSP',
    'SWIPE',
    'NARP',
    'MOBILE',
    'TLSP',
    'SKIP',
    'IPv6-ICMP',
    'IPv6-NoNxt',
    'IPv6-Opts',
    '',
    'CFTP',
    '',
    'SAT-EXPAK',
    'KRYPTOLAN',
    'RVD',
    'IPPC',
    '',
    'SAT-MON',
    'VISA',
    'IPCU',
    'CPNX',
    'CPHB',
    'WSN',
    'PVP',
    'BR-SAT-MON',
    'SUN-ND',
    'WB-MON',
    'WB-EXPAK',
    'ISO-IP',
    'VMTP',
    'SECURE-VMTP',
    'VINES',
    'TTP or IPTM',
    'NSFNET-IGP',
    'DGP',
    'TCF',
    'EIGRP',
    'OSPF',
    'Sprite-RPC',
    'LARP',
    'MTP',
    'AX.25',
    'OS',
    'MICP',
    'SCC-SP',
    'ETHERIP',
    'ENCAP',
    'Unknown',
    'GMTP',
    'IFMP',
    'PNNI',
    'PIM',
    'ARIS',
    'SCPS',
    'QNX',
    'A/N',
    'IPComp',
    'SNP',
    'Compaq-Peer',
    'IPX-in-IP',
    'VRRP',
    'PGM',
    'Unknown',
    'L2TP',
    'DDX',
    'IATP',
    'STP',
    'SRP',
    'UTI',
    'SMP',
    'SM',
    'PTP',
    'IS-IS over IPv4',
    'FIRE',
    'CRTP',
    'CRUDP',
    'SSCOPMCE',
    'IPLT',
    'SPS',
    'PIPE',
    'SCTP',
    'FC',
    'RSVP-E2E-IGNORE',
    'Mobility Header',
    'UDPLite',
    'MPLS-in-IP',
    'manet',
    'HIP',
    'Shim6',
    'WESP',
    'ROHC',];
    return list[protocolId];
}

export function findApplication(portId) {
    switch(portId) {
        case 1:  return 'tcpmux'; break;
        case 5:  return 'rje'; break;
        case 7:  return 'echo'; break;
        case 9:  return 'discard'; break;
        case 11:  return 'systat'; break;
        case 13:  return 'daytime'; break;
        case 17:  return 'qotd'; break;
        case 18:  return 'msp'; break;
        case 19:  return 'chargen'; break;
        case 20:  return 'ftp-data'; break;
        case 21:  return 'ftp'; break;
        case 22:  return 'ssh'; break;
        case 23:  return 'telnet'; break;
        case 25:  return 'smtp'; break;
        case 37:  return 'time'; break;
        case 39:  return 'rlp'; break;
        case 42:  return 'nameserver'; break;
        case 43:  return 'nicname'; break;
        case 49:  return 'tacacs'; break;
        case 50:  return 're-mail-ck'; break;
        case 53:  return 'DNS'; break;
        case 63:  return 'whois++'; break;
        case 67:  return 'bootps'; break;
        case 68:  return 'bootpc'; break;
        case 69:  return 'tftp'; break;
        case 70:  return 'gopher'; break;
        case 71:  return 'netrjs-1'; break;
        case 72:  return 'netrjs-2'; break;
        case 73:  return 'netrjs-3'; break;
        case 73:  return 'netrjs-4'; break;
        case 79:  return 'finger'; break;
        case 80:  return 'http'; break;
        case 88:  return 'kerberos'; break;
        case 95:  return 'supdup'; break;
        case 101:  return 'hostname'; break;
        case 102:  return 'iso-tsap'; break;
        case 105:  return 'csnet-ns'; break;
        case 107:  return 'rtelnet'; break;
        case 109:  return 'pop2'; break;
        case 110:  return 'pop3'; break;
        case 111:  return 'sunrpc'; break;
        case 113:  return 'auth'; break;
        case 115:  return 'sftp'; break;
        case 117:  return 'uucp-path'; break;
        case 119:  return 'nntp'; break;
        case 123:  return 'ntp'; break;
        case 137:  return 'netbios-ns'; break;
        case 138:  return 'netbios-dgm'; break;
        case 139:  return 'netbios-ssn'; break;
        case 143:  return 'imap'; break;
        case 161:  return 'snmp'; break;
        case 162:  return 'snmptrap'; break;
        case 163:  return 'cmip-man'; break;
        case 164:  return 'cmip-agent'; break;
        case 174:  return 'mailq'; break;
        case 177:  return 'xdmcp'; break;
        case 178:  return 'nextstep'; break;
        case 179:  return 'bgp'; break;
        case 191:  return 'prospero'; break;
        case 194:  return 'irc'; break;
        case 199:  return 'smux'; break;
        case 201:  return 'at-rtmp'; break;
        case 202:  return 'at-nbp'; break;
        case 204:  return 'at-echo'; break;
        case 206:  return 'at-zis'; break;
        case 209:  return 'qmtp'; break;
        case 210:  return 'z39.50'; break;
        case 213:  return 'ipx'; break;
        case 220:  return 'imap3'; break;
        case 245:  return 'link'; break;
        case 347:  return 'fatserv'; break;
        case 363:  return 'rsvp_tunnel'; break;
        case 369:  return 'rpc2portmap'; break;
        case 370:  return 'codaauth2'; break;
        case 372:  return 'ulistproc'; break;
        case 389:  return 'ldap'; break;
        case 427:  return 'svrloc'; break;
        case 434:  return 'mobileip-agent'; break;
        case 435:  return 'mobilip-mn'; break;
        case 443:  return 'https'; break;
        case 444:  return 'snpp'; break;
        case 445:  return 'microsoft-ds'; break;
        case 464:  return 'kpasswd'; break;
        case 468:  return 'photuris'; break;
        case 487:  return 'saft'; break;
        case 488:  return 'gss-http'; break;
        case 496:  return 'pim-rp-disc'; break;
        case 500:  return 'isakmp'; break;
        case 535:  return 'iiop'; break;
        case 538:  return 'gdomap'; break;
        case 546:  return 'dhcpv6-client'; break;
        case 547:  return 'dhcpv6-server'; break;
        case 554:  return 'rtsp'; break;
        case 563:  return 'nntps'; break;
        case 565:  return 'whoami'; break;
        case 587:  return 'submission'; break;
        case 610:  return 'npmp-local'; break;
        case 611:  return 'npmp-gui'; break;
        case 612:  return 'hmmp-ind'; break;
        case 631:  return 'ipp'; break;
        case 636:  return 'ldaps'; break;
        case 674:  return 'acap'; break;
        case 694:  return 'ha-cluster'; break;
        case 749:  return 'kerberos-adm'; break;
        case 750:  return 'kerberos-iv'; break;
        case 765:  return 'webster'; break;
        case 767:  return 'phonebook'; break;
        case 873:  return 'rsync'; break;
        case 992:  return 'telnets'; break;
        case 993:  return 'imaps'; break;
        case 994:  return 'ircs'; break;
        case 995:  return 'pop3s'; break;
        case 8080: return 'http'; break;
        default: return '';
    }
}