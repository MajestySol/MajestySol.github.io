"use client"

import { Divider, Space, Typography } from "antd";
import Link from "next/link";
const { Text, Link: UiLink, Title } = Typography;
export default function Component() {
  return (
    <main>
      <Title level={4}>
        Solana validator [Testnet]
      </Title>
      <Divider />
      <Text>
        Edgevana server
        <br />CPU: AMD EPYC 32 Core 3.2 GHz
        <br />RAM: 512 GB
        <br />Location: London, England
        <br />Operating System: Ubuntu 20.x
        <br />Security - DDOS Protection
        <br />Network - 2 Gbps pipe with 300 Mbps commit, burstable
      </Text>
      <Divider />
      <Space direction="vertical">
        <Link target="_blank" href={'https://solana.org/sfdp-validators/AS4i8EXUZnPbmNT5ZXmoTEbrXQrbFoReiWwwFB43Ds5z'}>Check my validator status in delegation Program</Link>
        <Link target="_blank" href={'https://metrics.stakeconomy.com/d/f2b2HcaGz/solana-community-validator-dashboard?orgId=1&refresh=1m&var-pubkey=8buHwxjeC8fnD5MZrTaR8iLsZYKaHJMXLzRD37HqYjLx&var-server=MajestySol-testnet&var-inter=1m&var-netif=eth0&var-version='}>Grafana Dashboard</Link>
      </Space>
    </main>
  );
}
