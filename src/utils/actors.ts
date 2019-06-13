let actors = {
    "authors": [
        "Alexandre Dulaunoy",
        "Florian Roth",
        "Thomas Schreck",
        "Timo Steffens",
        "Various"
    ],
    "category": "actor",
    "description": "Known or estimated adversary groups targeting organizations and employees. Adversary groups are regularly confused with their initial operation or campaign.",
    "name": "Threat Actor",
    "source": "MISP Project",
    "type": "threat-actor",
    "uuid": "7cdff317-a673-4474-84ec-4f1754947823",
    "values": [
        {
            "description": "PLA Unit 61398 (Chinese: 61398\u90e8\u961f, Pinyin: 61398 b\u00f9du\u00ec) is the Military Unit Cover Designator (MUCD)[1] of a People's Liberation Army advanced persistent threat unit that has been alleged to be a source of Chinese computer hacking attacks",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "Taiwan",
                    "Israel",
                    "Norway",
                    "United Arab Emirates",
                    "United Kingdom",
                    "Singapore",
                    "India",
                    "Belgium",
                    "South Africa",
                    "Switzerland",
                    "Canada",
                    "France",
                    "Luxembourg",
                    "Japan"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://en.wikipedia.org/wiki/PLA_Unit_61398",
                    "http://intelreport.mandiant.com/Mandiant_APT1_Report.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/pla-unit-61398",
                    "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf",
                    "https://blog.trendmicro.com/trendlabs-security-intelligence/the-siesta-campaign-a-new-targeted-attack-awakens/",
                    "https://www.fireeye.com/blog/threat-research/2014/03/a-detailed-examination-of-the-siesta-campaign.html",
                    "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/operation-oceansalt-delivers-wave-after-wave/",
                    "https://www.mcafee.com/enterprise/en-us/assets/reports/rp-operation-oceansalt.pdf",
                    "https://www.symantec.com/connect/blogs/apt1-qa-attacks-comment-crew",
                    "https://attack.mitre.org/groups/G0006/",
                    "https://www.nytimes.com/2014/05/20/us/us-to-charge-chinese-workers-with-cyberspying.html"
                ],
                "synonyms": [
                    "Comment Panda",
                    "PLA Unit 61398",
                    "APT 1",
                    "APT1",
                    "Advanced Persistent Threat 1",
                    "Byzantine Candor",
                    "Group 3",
                    "TG-8223",
                    "Comment Group",
                    "Brown Fox",
                    "GIF89a",
                    "ShadyRAT",
                    "Shanghai Group"
                ]
            },
            "related": [
                {
                    "dest-uuid": "6a2e693f-24e5-451a-9f88-b36a108e5662",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "1cb7e1cc-d695-42b1-92f4-fd0112a3c9be",
            "value": "Comment Crew",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "TWN",
                    "ISR",
                    "NOR",
                    "ARE",
                    "GBR",
                    "SGP",
                    "IND",
                    "BEL",
                    "ZAF",
                    "CHE",
                    "CAN",
                    "FRA",
                    "LUX",
                    "JPN"
                ]
            }
        },
        {
            "description": "The group appears to have close ties to the Chinese National University of Defense and Technology, which is possibly linked to the PLA. Stalker Panda has been observed conducting targeted attacks against Japan, Taiwan, Hong Kong, and the United States. The attacks appear to be centered on political, media, and engineering sectors. The group appears to have been active since around 2010 and they maintain and upgrade their tools regularly.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://wikileaks.org/vault7/document/2015-08-20150814-256-CSIR-15005-Stalker-Panda/2015-08-20150814-256-CSIR-15005-Stalker-Panda.pdf"
                ]
            },
            "uuid": "36843742-adf1-427c-a7c0-067d74b4aeaf",
            "value": "Stalker Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "These attackers were the subject of an extensive report by Symantec in 2011, which termed the attackers Nitro and stated: 'The goal of the attackers appears to be to collect intellectual property such as design documents, formulas, and manufacturing processes. In addition, the same attackers appear to have a lengthy operation history including attacks on other industries and organizations. Attacks on the chemical industry are merely their latest attack wave. As part of our investigations, we were also able to identify and contact one of the attackers to try and gain insights into the motivations behind these attacks.' Palo Alto Networks reported on continued activity by the attackers in 2014. ",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the_nitro_attacks.pdf"
                ],
                "synonyms": [
                    "Covert Grove"
                ]
            },
            "uuid": "0b06fb39-ed3d-4868-ac42-12fff6df2c80",
            "value": "Nitro",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "The New York Times described Codoso as: 'A collection of hackers for hire that the security industry has been tracking for years. Over the years, the group has breached banks, law firms and tech companies, and once hijacked the Forbes website to try to infect visitors\u2019 computers with malware.'",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://www.proofpoint.com/us/exploring-bergard-old-malware-new-tricks",
                    "http://www.isightpartners.com/2015/02/codoso/#sthash.VJMDVPQB.dpuf",
                    "http://researchcenter.paloaltonetworks.com/2016/01/new-attacks-linked-to-c0d0s0-group/",
                    "https://www.nytimes.com/2016/06/12/technology/the-chinese-hackers-in-the-back-office.html",
                    "https://www.ncsc.gov.uk/content/files/protected_files/article_files/Joint%20report%20on%20publicly%20available%20hacking%20tools%20%28NCSC%29.pdf"
                ],
                "synonyms": [
                    "C0d0so",
                    "APT19",
                    "APT 19",
                    "Sunshop Group"
                ]
            },
            "related": [
                {
                    "dest-uuid": "066d25c1-71bd-4bd4-8ca7-edbba00063f4",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "0286e80e-b0ed-464f-ad62-beec8536d0cb",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a653431d-6a5e-4600-8ad3-609b5af57064",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "103ebfd8-4280-4027-b61a-69bd9967ad6c",
            "value": "Codoso",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "https://www.cylance.com/content/dam/cylance/pdfs/reports/Op_Dust_Storm_Report.pdf",
                    "https://www.symantec.com/connect/blogs/inside-back-door-attack",
                    "https://attack.mitre.org/groups/G0031/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "ae41895a-243f-4a65-b99b-d85022326c31",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "9e71024e-817f-45b0-92a0-d886c30bc929",
            "value": "Dust Storm",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Adversary targeting dissident groups in China and its surroundings.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf"
                ]
            },
            "uuid": "06e659ff-ece8-4e6c-a110-d9692ac6d8ee",
            "value": "Karma Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "synonyms": [
                    "temp.bottle"
                ]
            },
            "uuid": "ad022538-b457-4839-8ebd-3fdcc807a820",
            "value": "Keyhole Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://go.crowdstrike.com/rs/281-OBQ-266/images/ReportGlobalThreatIntelligence.pdf"
                ]
            },
            "uuid": "ba8973b2-fd97-4aa7-9307-ea4838d96428",
            "value": "Wet Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "Adversary group targeting telecommunication and technology organizations.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://files.sans.org/summit/Threat_Hunting_Incident_Response_Summit_2016/PDFs/Detecting-and-Responding-to-Pandas-and-Bears-Christopher-Scott-CrowdStrike-and-Wendi-Whitmore-IBM.pdf"
                ]
            },
            "uuid": "41c15f08-a646-49f7-a644-1bebbf7a4dcd",
            "value": "Foxy Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://go.crowdstrike.com/rs/281-OBQ-266/images/ReportGlobalThreatIntelligence.pdf"
                ]
            },
            "uuid": "1969f622-d64a-4436-9a34-4c47fcb2535f",
            "value": "Predator Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://files.sans.org/summit/Threat_Hunting_Incident_Response_Summit_2016/PDFs/Detecting-and-Responding-to-Pandas-and-Bears-Christopher-Scott-CrowdStrike-and-Wendi-Whitmore-IBM.pdf"
                ]
            },
            "uuid": "7195b51f-500e-4034-a851-bf34a2728dc8",
            "value": "Union Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://go.crowdstrike.com/rs/281-OBQ-266/images/ReportGlobalThreatIntelligence.pdf"
                ]
            },
            "uuid": "4959652d-72fa-46e4-be20-4ec686409bfb",
            "value": "Spicy Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://files.sans.org/summit/Threat_Hunting_Incident_Response_Summit_2016/PDFs/Detecting-and-Responding-to-Pandas-and-Bears-Christopher-Scott-CrowdStrike-and-Wendi-Whitmore-IBM.pdf"
                ]
            },
            "uuid": "432b0304-768f-4fb9-9762-e745ef524ec7",
            "value": "Eloquent Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "synonyms": [
                    "LadyBoyle"
                ]
            },
            "uuid": "8a8f39df-74b3-4946-ab64-f84968bababe",
            "value": "Dizzy Panda",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Putter Panda were the subject of an extensive report by CrowdStrike, which stated: 'The CrowdStrike Intelligence team has been tracking this particular unit since2012, under the codename PUTTER PANDA, and has documented activity dating back to 2007. The report identifies Chen Ping, aka cpyy, and the primary location of Unit 61486.'",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "U.S. satellite and aerospace sector"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://cdn0.vox-cdn.com/assets/4589853/crowdstrike-intelligence-report-putter-panda.original.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/putter-panda"
                ],
                "synonyms": [
                    "PLA Unit 61486",
                    "APT 2",
                    "Group 36",
                    "APT-2",
                    "MSUpdater",
                    "4HCrew",
                    "SULPHUR",
                    "TG-6952"
                ]
            },
            "related": [
                {
                    "dest-uuid": "5ce5392a-3a6c-4e07-9df3-9b6a9159ac45",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "0ca45163-e223-4167-b1af-f088ed14a93d",
            "value": "Putter Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA"
                ]
            }
        },
        {
            "description": "Symantec described UPS in  2016 report as: 'Buckeye (also known as APT3, Gothic Panda, UPS Team, and TG-0110) is a cyberespionage group that is believed to have been operating for well over half a decade. Traditionally, the group attacked organizations in the US as well as other targets. However, Buckeyes focus appears to have changed as of June 2015, when the group began compromising political entities in Hong Kong.'",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "United Kingdom",
                    "Hong Kong"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2015/06/operation-clandestine-wolf-adobe-flash-zero-day.html",
                    "http://www.symantec.com/connect/blogs/buckeye-cyberespionage-group-shifts-gaze-us-hong-kong",
                    "https://www.cfr.org/interactive/cyber-operations/apt-3"
                ],
                "synonyms": [
                    "Gothic Panda",
                    "TG-0110",
                    "APT 3",
                    "Group 6",
                    "UPS Team",
                    "APT3",
                    "Buckeye",
                    "Boyusec"
                ]
            },
            "related": [
                {
                    "dest-uuid": "0bbdf25b-30ff-4894-a1cd-49260d0dd2d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "d144c83e-2302-4947-9e24-856fbf7949ae",
            "value": "UPS",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "GBR",
                    "HKG"
                ]
            }
        },
        {
            "description": "Kaspersky described DarkHotel in a 2014 report as: '... DarkHotel drives its campaigns by spear-phishing targets with highly advanced Flash zero-day exploits that effectively evade the latest Windows and Adobe defenses, and yet they also imprecisely spread among large numbers of vague targets with peer-to-peer spreading tactics. Moreover, this crews most unusual characteristic is that for several years the Darkhotel APT has maintained a capability to use hotel networks to follow and hit selected targets as they travel around the world.'",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Korea (Republic of)",
                "cfr-suspected-victims": [
                    "Japan",
                    "Russia",
                    "Taiwan",
                    "South Korea",
                    "China"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Korea, Republic of",
                "refs": [
                    "https://securelist.com/blog/research/71713/darkhotels-attacks-in-2015/",
                    "https://blogs.technet.microsoft.com/mmpc/2016/06/09/reverse-engineering-dubnium-2",
                    "https://securelist.com/blog/research/66779/the-darkhotel-apt/",
                    "https://securelist.com/the-darkhotel-apt/66779/",
                    "http://drops.wooyun.org/tips/11726",
                    "https://labs.bitdefender.com/wp-content/uploads/downloads/inexsmar-an-unusual-darkhotel-campaign/",
                    "https://www.cfr.org/interactive/cyber-operations/darkhotel",
                    "https://www.securityweek.com/darkhotel-apt-uses-new-methods-target-politicians",
                    "https://attack.mitre.org/groups/G0012/"
                ],
                "synonyms": [
                    "DUBNIUM",
                    "Fallout Team",
                    "Karba",
                    "Luder",
                    "Nemim",
                    "Nemin",
                    "Tapaoux",
                    "Pioneer",
                    "Shadow Crane",
                    "APT-C-06",
                    "SIG25"
                ]
            },
            "related": [
                {
                    "dest-uuid": "b56af6ab-69f8-457a-bf50-c3aefa6dc14a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "b8c8b96d-61e6-47b1-8e38-fd8ad5d9854d",
            "value": "DarkHotel",
            "aptmap": {
                "operatingFrom": "KOR",
                "victims": [
                    "JPN",
                    "RUS",
                    "TWN",
                    "KOR",
                    "CHN"
                ]
            }
        },
        {
            "description": "A group of China-based attackers, who conducted a number of spear phishing attacks in 2013.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Taiwan",
                    "Japan"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://www.crowdstrike.com/blog/whois-numbered-panda/",
                    "https://www.cfr.org/interactive/cyber-operations/apt-12",
                    "https://www.fireeye.com/blog/threat-research/2014/09/darwins-favorite-apt-group-2.html"
                ],
                "synonyms": [
                    "Numbered Panda",
                    "TG-2754",
                    "BeeBus",
                    "Group 22",
                    "DynCalc",
                    "Calc Team",
                    "DNSCalc",
                    "Crimson Iron",
                    "APT12",
                    "APT 12"
                ]
            },
            "related": [
                {
                    "dest-uuid": "c47f937f-1022-4f42-8525-e7a4779a14cb",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "48146604-6693-4db1-bd94-159744726514",
            "value": "IXESHE",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "TWN",
                    "JPN"
                ]
            }
        },
        {
            "description": "Between November 26, 2015, and December 1, 2015, known and suspected China-based APT groups launched several spear-phishing attacks targeting Japanese and Taiwanese organizations in the high-tech, government services, media and financial services industries. Each campaign delivered a malicious Microsoft Word document exploiting the aforementioned EPS dict copy use-after-free vulnerability, and the local Windows privilege escalation vulnerability CVE-2015-1701. The successful exploitation of both vulnerabilities led to the delivery of either a downloader that we refer to as IRONHALO, or a backdoor that we refer to as ELMER.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Japan",
                    "Taiwan"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2015/12/the_eps_awakens.html",
                    "https://www.cfr.org/interactive/cyber-operations/apt-16"
                ],
                "synonyms": [
                    "APT16",
                    "SVCMONDR"
                ]
            },
            "uuid": "1f73e14f-b882-4032-a565-26dc653b0daf",
            "value": "APT 16",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "JPN",
                    "TWN"
                ]
            }
        },
        {
            "description": "FireEye described APT17 in a 2015 report as: 'APT17, also known as DeputyDog, is a China based threat group that FireEye Intelligence has observed conducting network intrusions against U.S. government entities, the defense industry, law firms, information technology companies, mining companies, and non-government organizations.'",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://www.fireeye.com/blog/technical/cyber-exploits/2013/09/operation-deputydog-zero-day-cve-2013-3893-attack-against-japanese-targets.html",
                    "http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/hidden_lynx.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/apt-17",
                    "https://blog.bit9.com/2013/02/08/bit9-and-our-customers-security/",
                    "https://www.symantec.com/connect/blogs/security-vendors-take-action-against-hidden-lynx-malware",
                    "https://www.symantec.com/connect/blogs/hidden-lynx-professional-hackers-hire",
                    "https://www.recordedfuture.com/hidden-lynx-analysis/"
                ],
                "synonyms": [
                    "APT 17",
                    "Deputy Dog",
                    "Group 8",
                    "APT17",
                    "Hidden Lynx",
                    "Tailgater Team",
                    "Dogfish"
                ]
            },
            "related": [
                {
                    "dest-uuid": "090242d7-73fc-4738-af68-20162f7a5aae",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "24110866-cb22-4c85-a7d2-0413e126694b",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "c5947e1c-1cbc-434c-94b8-27c7e3be0fff",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0cb9370-e39b-44d5-9f50-ef78e412b973",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "99e30d89-9361-4b73-a999-9e5ff9320bcb",
            "value": "Aurora Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA"
                ]
            }
        },
        {
            "description": "Wekby was described by Palo Alto Networks in a 2015 report as: 'Wekby is a group that has been active for a number of years, targeting various industries such as healthcare, telecommunications, aerospace, defense, and high tech. The group is known to leverage recently released exploits very shortly after those exploits are available, such as in the case of HackingTeams Flash zero - day exploit.'",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://threatpost.com/apt-gang-branches-out-to-medical-espionage-in-community-health-breach/107828",
                    "https://www.cfr.org/interactive/cyber-operations/apt-18"
                ],
                "synonyms": [
                    "Dynamite Panda",
                    "TG-0416",
                    "APT 18",
                    "SCANDIUM",
                    "PLA Navy",
                    "APT18"
                ]
            },
            "related": [
                {
                    "dest-uuid": "38fd6a28-3353-4f2b-bb2b-459fecd5c648",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "2fb07fa4-0d7f-43c7-8ff4-b28404313fe7",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "8e28dbee-4e9e-4491-9a6c-ee9c9ec4b28b",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "9a683d9c-8f7d-43df-bba2-ad0ca71e277c",
            "value": "Wekby",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA"
                ]
            }
        },
        {
            "description": "TrendMicro described Tropic Trooper in a 2015 report as: 'Taiwan and the Philippines have become the targets of an ongoing campaign called Operation TropicTrooper. Active since 2012, the attackers behind the campaign haveset their sights on the Taiwanese government as well as a number of companies in the heavy industry. The same campaign has also targeted key Philippine military agencies.'",
            "meta": {
                "refs": [
                    "http://researchcenter.paloaltonetworks.com/2016/11/unit42-tropic-trooper-targets-taiwanese-government-and-fossil-fuel-provider-with-poison-ivy/",
                    "http://www.trendmicro.com/cloud-content/us/pdfs/security-intelligence/white-papers/wp-operation-tropic-trooper.pdf"
                ],
                "synonyms": [
                    "Operation Tropic Trooper",
                    "Operation TropicTrooper",
                    "TropicTrooper"
                ]
            },
            "uuid": "4fd409a9-db86-46a5-bdf2-b6c8ee397a89",
            "value": "Tropic Trooper",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "The Winnti grouping of activity is large and may actually be a number of linked groups rather than a single discrete entity. Kaspersky describe Winnti as: 'The Winnti group has been attacking companies in the online video game industry since 2009 and is currently still active. The groups objectives are stealing digital certificates signed by legitimate software vendors in addition to intellectual property theft, including the source code of online game projects. The majority of the victims are from South East Asia.'",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "Netherlands",
                    "Italy",
                    "Japan",
                    "United Kingdom",
                    "Belgium",
                    "Russia",
                    "Indonesia",
                    "Germany",
                    "Switzerland",
                    "China"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://securelist.com/blog/research/57585/winnti-faq-more-than-just-a-game/",
                    "http://williamshowalter.com/a-universal-windows-bootkit/",
                    "https://blogs.technet.microsoft.com/mmpc/2017/01/25/detecting-threat-actors-in-recent-german-industrial-attacks-with-windows-defender-atp",
                    "https://www.cfr.org/interactive/cyber-operations/axiom"
                ],
                "synonyms": [
                    "Winnti Group",
                    "Tailgater Team",
                    "Group 72",
                    "Group72",
                    "Tailgater",
                    "Ragebeast",
                    "Blackfly",
                    "Lead",
                    "Wicked Spider",
                    "APT17",
                    "APT 17",
                    "Dogfish",
                    "Deputy Dog",
                    "Wicked Panda",
                    "Barium"
                ]
            },
            "related": [
                {
                    "dest-uuid": "c5947e1c-1cbc-434c-94b8-27c7e3be0fff",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "090242d7-73fc-4738-af68-20162f7a5aae",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "99e30d89-9361-4b73-a999-9e5ff9320bcb",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0cb9370-e39b-44d5-9f50-ef78e412b973",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "24110866-cb22-4c85-a7d2-0413e126694b",
            "value": "Axiom",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "NLD",
                    "ITA",
                    "JPN",
                    "GBR",
                    "BEL",
                    "RUS",
                    "IDN",
                    "DEU",
                    "CHE",
                    "CHN"
                ]
            }
        },
        {
            "description": "Adversary group targeting financial, technology, non-profit organisations.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://cybercampaigns.net/wp-content/uploads/2013/06/Deep-Panda.pdf",
                    "http://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/deep-panda",
                    "https://eromang.zataz.com/2012/12/29/attack-and-ie-0day-informations-used-against-council-on-foreign-relations/",
                    "https://eromang.zataz.com/2013/01/02/capstone-turbine-corporation-also-targeted-in-the-cfr-watering-hole-attack-and-more/",
                    "https://www.crowdstrike.com/blog/department-labor-strategic-web-compromise/",
                    "https://www.crowdstrike.com/blog/deep-thought-chinese-targeting-national-security-think-tanks/",
                    "https://krebsonsecurity.com/2015/06/catching-up-on-the-opm-breach/",
                    "https://krebsonsecurity.com/2015/02/anthem-breach-may-have-started-in-april-2014/",
                    "https://www.nextgov.com/cybersecurity/2015/05/third-party-software-was-entry-point-background-check-system-hack/112354/",
                    "https://www.crowdstrike.com/blog/ironman-deep-panda-uses-sakula-malware-target-organizations-multiple-sectors/",
                    "https://www.abc.net.au/news/2014-11-13/g20-china-affliliated-hackers-breaches-australian-media/5889442",
                    "https://www.washingtonpost.com/business/economy/keypoint-suffers-network-breach-thousands-of-fed-workers-could-be-affected/2014/12/18/e6c7146c-86e1-11e4-a702-fa31ff4ae98e_story.html",
                    "https://www.seattletimes.com/business/local-business/feds-warned-premera-about-security-flaws-before-breach/",
                    "https://krebsonsecurity.com/2015/05/carefirst-blue-cross-breach-hits-1-1m/",
                    "https://threatvector.cylance.com/en_us/home/shell-crew-variants-continue-to-fly-under-big-avs-radar.html",
                    "https://www.bleepingcomputer.com/news/security/us-arrests-chinese-man-involved-with-sakula-malware-used-in-opm-and-anthem-hacks/",
                    "https://gizmodo.com/u-s-indicts-chinese-hacker-spies-in-conspiracy-to-stea-1830111695",
                    "https://www.cyberscoop.com/anthem-breach-indictment-chinese-national/",
                    "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the-black-vine-cyberespionage-group.pdf",
                    "https://attack.mitre.org/groups/G0009/"
                ],
                "synonyms": [
                    "Deep Panda",
                    "WebMasters",
                    "APT 19",
                    "KungFu Kittens",
                    "Black Vine",
                    "Group 13",
                    "PinkPanther",
                    "Sh3llCr3w"
                ]
            },
            "related": [
                {
                    "dest-uuid": "a653431d-6a5e-4600-8ad3-609b5af57064",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "0286e80e-b0ed-464f-ad62-beec8536d0cb",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "103ebfd8-4280-4027-b61a-69bd9967ad6c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "066d25c1-71bd-4bd4-8ca7-edbba00063f4",
            "value": "Shell Crew",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA"
                ]
            }
        },
        {
            "description": "Kaspersky described Naikon in a 2015 report as: 'The Naikon group is mostly active in countries such as the Philippines, Malaysia, Cambodia, Indonesia, Vietnam, Myanmar, Singapore, and Nepal, hitting a variety of targets in a very opportunistic way.'",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "India",
                    "Saudi Arabia",
                    "Vietnam",
                    "Myanmar",
                    "Singapore",
                    "Thailand",
                    "Malaysia",
                    "Cambodia",
                    "China",
                    "Philippines",
                    "South Korea",
                    "United States",
                    "Indonesia",
                    "Laos"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://securelist.com/analysis/publications/69953/the-naikon-apt/",
                    "https://www.fireeye.com/blog/threat-research/2014/03/spear-phishing-the-news-cycle-apt-actors-leverage-interest-in-the-disappearance-of-malaysian-flight-mh-370.html",
                    "https://www.cfr.org/interactive/cyber-operations/apt-30"
                ],
                "synonyms": [
                    "PLA Unit 78020",
                    "APT 30",
                    "APT30",
                    "Override Panda",
                    "Camerashy",
                    "APT.Naikon",
                    "Lotus Panda"
                ]
            },
            "related": [
                {
                    "dest-uuid": "2a158b0a-7ef8-43cb-9985-bf34d1e12050",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "5e0a7cf2-6107-4d5f-9dd0-9df38b1fcba8",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f26144c5-8593-4e78-831a-11f6452d809b",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f047ee18-7985-4946-8bfb-4ed754d3a0dd",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "2f1fd017-9df6-4759-91fb-e7039609b5ff",
            "value": "Naikon",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "IND",
                    "SAU",
                    "VNM",
                    "MMR",
                    "SGP",
                    "THA",
                    "MYS",
                    "KHM",
                    "CHN",
                    "PHL",
                    "KOR",
                    "USA",
                    "IDN",
                    "LAO"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Japan",
                    "Philippines",
                    "Hong Kong",
                    "Indonesia",
                    "Taiwan",
                    "Vietnam"
                ],
                "cfr-target-category": [
                    "Military",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://securelist.com/blog/research/70726/the-spring-dragon-apt/",
                    "https://securelist.com/spring-dragon-updated-activity/79067/",
                    "https://www.cfr.org/interactive/cyber-operations/lotus-blossom",
                    "https://unit42.paloaltonetworks.com/operation-lotus-blossom/",
                    "https://www.accenture.com/t00010101T000000Z__w__/gb-en/_acnmedia/PDF-46/Accenture-Security-Elise-Threat-Analysis.pdf"
                ],
                "synonyms": [
                    "Spring Dragon",
                    "ST Group",
                    "Esile",
                    "DRAGONFISH"
                ]
            },
            "related": [
                {
                    "dest-uuid": "88b7dbc2-32d3-4e31-af2f-3fc24e1582d7",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "32fafa69-fe3c-49db-afd4-aac2664bcf0d",
            "value": "Lotus Blossom",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "JPN",
                    "PHL",
                    "HKG",
                    "IDN",
                    "TWN",
                    "VNM"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.crowdstrike.com/blog/rhetoric-foreshadows-cyber-activity-in-the-south-china-sea/"
                ],
                "synonyms": [
                    "Elise"
                ]
            },
            "related": [
                {
                    "dest-uuid": "2a158b0a-7ef8-43cb-9985-bf34d1e12050",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "2f1fd017-9df6-4759-91fb-e7039609b5ff",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f26144c5-8593-4e78-831a-11f6452d809b",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f047ee18-7985-4946-8bfb-4ed754d3a0dd",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "5e0a7cf2-6107-4d5f-9dd0-9df38b1fcba8",
            "value": "Lotus Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.crowdstrike.com/blog/cyber-deterrence-in-action-a-story-of-one-long-hurricane-panda-campaign/"
                ],
                "synonyms": [
                    "Black Vine",
                    "TEMP.Avengers"
                ]
            },
            "related": [
                {
                    "dest-uuid": "a653431d-6a5e-4600-8ad3-609b5af57064",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "066d25c1-71bd-4bd4-8ca7-edbba00063f4",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "103ebfd8-4280-4027-b61a-69bd9967ad6c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "0286e80e-b0ed-464f-ad62-beec8536d0cb",
            "value": "Hurricane Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "A China-based actor that targets foreign embassies to collect data on government, defence, and technology sectors.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "United States",
                    "Japan",
                    "Taiwan",
                    "India",
                    "Canada",
                    "China",
                    "Thailand",
                    "Israel",
                    "Australia",
                    "Republic of Korea",
                    "Russia",
                    "Iran"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://www.secureworks.com/cyber-threat-intelligence/threats/threat-group-3390-targets-organizations-for-cyberespionage/",
                    "http://www.scmagazineuk.com/iran-and-russia-blamed-for-state-sponsored-espionage/article/330401/",
                    "https://labs.bitdefender.com/2018/02/operation-pzchao-a-possible-return-of-the-iron-tiger-apt/",
                    "https://labs.bitdefender.com/wp-content/uploads/downloads/operation-pzchao-inside-a-highly-specialized-espionage-infrastructure/",
                    "https://www.cfr.org/interactive/cyber-operations/iron-tiger"
                ],
                "synonyms": [
                    "TG-3390",
                    "APT 27",
                    "TEMP.Hippo",
                    "Group 35",
                    "Bronze Union",
                    "ZipToken",
                    "HIPPOTeam",
                    "APT27",
                    "Operation Iron Tiger",
                    "Iron Tiger APT",
                    "BRONZE UNION"
                ]
            },
            "related": [
                {
                    "dest-uuid": "fb366179-766c-4a4a-afa1-52bff1fd601c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f1b9f7d6-6ab1-404b-91a6-a1ed1845c045",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "4af45fea-72d3-11e8-846c-d37699506c8d",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "834e0acd-d92a-4e38-bb14-dc4159d7cb32",
            "value": "Emissary Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "JPN",
                    "TWN",
                    "IND",
                    "CAN",
                    "CHN",
                    "THA",
                    "ISR",
                    "AUS",
                    "PRK",
                    "RUS",
                    "IRN"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Japan",
                    "India",
                    "South Africa",
                    "South Korea",
                    "Sweden",
                    "United States",
                    "Canada",
                    "Australia",
                    "France",
                    "Finland",
                    "United Kingdom",
                    "Brazil",
                    "Thailand",
                    "Switzerland",
                    "Norway"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://researchcenter.paloaltonetworks.com/2017/02/unit42-menupass-returns-new-malware-new-attacks-japanese-academics-organizations/",
                    "https://www.cfr.org/interactive/cyber-operations/apt-10",
                    "https://www.ncsc.gov.uk/content/files/protected_files/article_files/Joint%20report%20on%20publicly%20available%20hacking%20tools%20%28NCSC%29.pdf",
                    "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-report-final-v4.pdf"
                ],
                "synonyms": [
                    "APT10",
                    "APT 10",
                    "MenuPass",
                    "Menupass Team",
                    "happyyongzi",
                    "POTASSIUM",
                    "DustStorm",
                    "Red Apollo",
                    "CVNX",
                    "HOGFISH",
                    "Cloud Hopper",
                    "Stone Panda"
                ]
            },
            "related": [
                {
                    "dest-uuid": "222fbd21-fc4f-4b7e-9f85-0e6e3a76c33f",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "56b37b05-72e7-4a89-ba8a-61ce45269a8c",
            "value": "Stone Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "JPN",
                    "IND",
                    "ZAF",
                    "KOR",
                    "SWE",
                    "USA",
                    "CAN",
                    "AUS",
                    "FRA",
                    "FIN",
                    "GBR",
                    "BRA",
                    "THA",
                    "CHE",
                    "NOR"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://otx.alienvault.com/pulse/55bbc68e67db8c2d547ae393/"
                ],
                "synonyms": [
                    "APT 9",
                    "Flowerlady/Flowershow",
                    "Flowerlady",
                    "Flowershow"
                ]
            },
            "uuid": "401dd2c9-bd4f-4814-bb87-701e38f18d45",
            "value": "Nightshade Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "This threat actor uses spear-phishing techniques to compromise diplomatic targets in Southeast Asia, India, and the United States. It also seems to have targeted the APT 30. Possibly uses the same infrastructure as Mirage",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Malaysia",
                    "Indonesia",
                    "Philippines",
                    "United States",
                    "India"
                ],
                "cfr-target-category": [
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://securelist.com/analysis/publications/69567/the-chronicles-of-the-hellsing-apt-the-empire-strikes-back/",
                    "https://www.cfr.org/interactive/cyber-operations/hellsing",
                    "https://www.crowdstrike.com/blog/meet-crowdstrikes-adversary-of-the-month-for-august-goblin-panda/",
                    "https://www.fortinet.com/blog/threat-research/cta-security-playbook--goblin-panda.html"
                ],
                "synonyms": [
                    "Goblin Panda",
                    "Cycldek"
                ]
            },
            "uuid": "af482dde-9e47-48d5-9cb2-cf8f6d6303d3",
            "value": "Hellsing",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "MYS",
                    "IDN",
                    "PHL",
                    "USA",
                    "IND"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://kc.mcafee.com/corporate/index?page=content&id=KB71150"
                ]
            },
            "related": [
                {
                    "dest-uuid": "23b6a0f5-fa95-46f9-a6f3-4549c5e45ec8",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "b3714d59-b61e-4713-903a-9b4f04ae7f3d",
            "value": "Night Dragon",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "This threat actor uses phishing techniques to compromise the networks of foreign ministries of European countries for espionage purposes.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "European Union",
                    "India",
                    "United Kingdom"
                ],
                "cfr-target-category": [
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2014/09/forced-to-adapt-xslcmd-backdoor-now-on-os-x.html",
                    "http://arstechnica.com/security/2015/04/elite-cyber-crime-group-strikes-back-after-attack-by-rival-apt-gang/",
                    "https://github.com/nccgroup/Royal_APT",
                    "https://www.cfr.org/interactive/cyber-operations/mirage"
                ],
                "synonyms": [
                    "Vixen Panda",
                    "Ke3Chang",
                    "GREF",
                    "Playful Dragon",
                    "APT 15",
                    "APT15",
                    "Metushy",
                    "Lurid",
                    "Social Network Team",
                    "Royal APT"
                ]
            },
            "uuid": "3501fbf2-098f-47e7-be6a-6b0ff5742ce8",
            "value": "Mirage",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "IND",
                    "GBR"
                ]
            }
        },
        {
            "description": "PLA Navy\nAnchor Panda is an adversary that CrowdStrike has tracked extensively over the last year targeting both civilian and military maritime operations in the green/brown water regions primarily in the area of operations of the South Sea Fleet of the PLA Navy. In addition to maritime operations in this region, Anchor Panda also heavily targeted western companies in the US, Germany, Sweden, the UK, and Australia, and other countries involved in maritime satellite systems, aerospace companies, and defense contractors. \nNot surprisingly, embassies and diplomatic missions in the region, foreign intelligence services, and foreign governments with space programs were also targeted.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "United Kingdom",
                    "Germany",
                    "Australia",
                    "Sweden"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "motive": "Espionage",
                "refs": [
                    "http://www.crowdstrike.com/blog/whois-anchor-panda/",
                    "https://www.cfr.org/interactive/cyber-operations/anchor-panda"
                ],
                "synonyms": [
                    "APT14",
                    "APT 14",
                    "QAZTeam",
                    "ALUMINUM"
                ]
            },
            "related": [
                {
                    "dest-uuid": "255a59a7-db2d-44fc-9ca9-5859b65817c3",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "uses"
                },
                {
                    "dest-uuid": "cb8c8253-4024-4cc9-8989-b4a5f95f6c2f",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "uses"
                },
                {
                    "dest-uuid": "4e104fef-8a2c-4679-b497-6e86d7d47db0",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "uses"
                },
                {
                    "dest-uuid": "2abe89de-46dd-4dae-ae22-b49a593aff54",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "uses"
                },
                {
                    "dest-uuid": "32a67552-3b31-47bb-8098-078099bbc813",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "uses"
                }
            ],
            "uuid": "c82c904f-b3b4-40a2-bf0d-008912953104",
            "value": "Anchor Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "GBR",
                    "DEU",
                    "AUS",
                    "SWE"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Mongolia",
                    "Kazakhstan",
                    "Tajikistan",
                    "Germany",
                    "United Kingdom",
                    "India",
                    "Kyrgyzstan",
                    "South Korea",
                    "United States",
                    "Chile",
                    "Russia",
                    "China",
                    "Spain",
                    "Canada",
                    "Morocco"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://securelist.com/blog/research/35936/nettraveler-is-running-red-star-apt-attacks-compromise-high-profile-victims/",
                    "https://www.cfr.org/interactive/cyber-operations/nettraveler"
                ],
                "synonyms": [
                    "APT 21"
                ]
            },
            "uuid": "b80f4788-ccb2-466d-ae16-b397159d907e",
            "value": "NetTraveler",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "MNG",
                    "KAZ",
                    "TJK",
                    "DEU",
                    "GBR",
                    "IND",
                    "KGZ",
                    "KOR",
                    "USA",
                    "CHL",
                    "RUS",
                    "CHN",
                    "ESP",
                    "CAN",
                    "MAR"
                ]
            }
        },
        {
            "description": "Operate since at least 2011, from several locations in China, with  members in Korea and Japan as well. Possibly linked to Onion Dog. This threat actor targets government institutions, military contractors, maritime and shipbuilding groups, telecommunications operators, and others, primarily in Japan and South Korea.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "South Korea",
                    "United States",
                    "Japan",
                    "Germany",
                    "China"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://securelist.com/blog/research/57331/the-icefog-apt-a-tale-of-cloak-and-three-daggers/",
                    "https://securelist.com/blog/incidents/58209/the-icefog-apt-hits-us-targets-with-java-backdoor/",
                    "https://www.cfr.org/interactive/cyber-operations/icefog"
                ],
                "synonyms": [
                    "IceFog",
                    "Dagger Panda"
                ]
            },
            "uuid": "32c534b9-abec-4823-b223-a810f897b47b",
            "value": "Ice Fog",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "KOR",
                    "USA",
                    "JPN",
                    "DEU",
                    "CHN"
                ]
            }
        },
        {
            "description": "The Pitty Tiger group has been active since at least 2011. They have been seen using HeartBleed vulnerability in order to directly get valid credentials",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://blog.airbuscybersecurity.com/post/2014/07/The-Eye-of-the-Tiger2"
                ],
                "synonyms": [
                    "PittyTiger",
                    "MANGANESE"
                ]
            },
            "related": [
                {
                    "dest-uuid": "fe98767f-9df8-42b9-83c9-004b1dec8647",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "4d37813c-b8e9-4e58-a758-03168d8aa189",
            "value": "Pitty Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "http://researchcenter.paloaltonetworks.com/2015/12/bbsrat-attacks-targeting-russian-organizations-linked-to-roaming-tiger/"
                ]
            },
            "uuid": "1fb177c1-472a-4147-b7c4-b5269b11703d",
            "value": "Roaming Tiger",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "Canada",
                    "United Kingdom",
                    "Switzerland",
                    "Hong Kong",
                    "Australia",
                    "India",
                    "Taiwan",
                    "China",
                    "Denmark"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/sneaky-panda",
                    "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the-elderwood-project.pdf",
                    "https://attack.mitre.org/groups/G0066/"
                ],
                "synonyms": [
                    "Sneaky Panda",
                    "Elderwood",
                    "Elderwood Gang",
                    "SIG22"
                ]
            },
            "related": [
                {
                    "dest-uuid": "03506554-5f37-4f8f-9ce4-0e9f01a1b484",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "da754aeb-a86d-4874-b388-d1d2028a56be",
            "value": "Beijing Group",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "CAN",
                    "GBR",
                    "CHE",
                    "HKG",
                    "AUS",
                    "IND",
                    "TWN",
                    "CHN",
                    "DNK"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "synonyms": [
                    "Shrouded Crossbow"
                ]
            },
            "uuid": "c92d7d31-cfd9-4309-b6c4-b7eb1e85fa7e",
            "value": "Radio Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://researchcenter.paloaltonetworks.com/2015/09/chinese-actors-use-3102-malware-in-attacks-on-us-government-and-eu-media/"
                ]
            },
            "uuid": "f33fd440-93ee-41e5-974a-be9343e18cdf",
            "value": "APT.3102",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "United Kingdom",
                    "Hong Kong"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://www.crowdstrike.com/blog/whois-samurai-panda/",
                    "https://www.cfr.org/interactive/cyber-operations/sykipot"
                ],
                "synonyms": [
                    "PLA Navy",
                    "APT4",
                    "APT 4",
                    "Wisp Team",
                    "Getkys",
                    "SykipotGroup",
                    "Wkysol"
                ]
            },
            "related": [
                {
                    "dest-uuid": "38fd6a28-3353-4f2b-bb2b-459fecd5c648",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "9a683d9c-8f7d-43df-bba2-ad0ca71e277c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "8e28dbee-4e9e-4491-9a6c-ee9c9ec4b28b",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "2fb07fa4-0d7f-43c7-8ff4-b28404313fe7",
            "value": "Samurai Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "GBR",
                    "HKG"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China"
            },
            "uuid": "b56ecbda-6b2a-4aa9-b592-d9a0bc810ec1",
            "value": "Impersonating Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "We\u2019ve uncovered some new data and likely attribution regarding a series of APT watering hole attacks this past summer. Watering hole attacks are an increasingly popular component of APT campaigns, as many people are more aware of spear phishing and are less likely to open documents or click on links in unsolicited emails. Watering hole attacks offer a much better chance of success because they involve compromising legitimate websites and installing malware intended to compromise website visitors. These are often popular websites frequented by people who work in specific industries or have political sympathies to which the actors want to gain access.\nIn contrast to many other APT campaigns, which tend to rely heavily on spear phishing to gain victims, \u201cth3bug\u201d is known for compromising legitimate websites their intended visitors are likely to frequent. Over the summer they compromised several sites, including a well-known Uyghur website written in that native language.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://researchcenter.paloaltonetworks.com/2014/09/recent-watering-hole-attacks-attributed-apt-group-th3bug-using-poison-ivy/"
                ],
                "synonyms": [
                    "APT20",
                    "APT 20",
                    "APT8",
                    "APT 8",
                    "TH3Bug"
                ]
            },
            "uuid": "8bcd855f-a4c1-453a-bede-ff36582f4f40",
            "value": "Violin Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "A group targeting dissident groups in China and at the boundaries.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf"
                ]
            },
            "uuid": "1514546d-f6ea-4af3-bbea-24d6fd9e6761",
            "value": "Toxic Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "China-based cyber threat group. It has previously used newsworthy events as lures to deliver malware and has primarily targeted organizations involved in financial, economic, and trade policy, typically using publicly available RATs such as PoisonIvy, as well as some non-public backdoors. This threat actor targets prodemocratic activists and organizations in Hong Kong, European and international financial institutions, and a U.S.-based think tank.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Hong Kong",
                    "United States"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2013/10/know-your-enemy-tracking-a-rapidly-evolving-apt-actor.html",
                    "https://www.fireeye.com/blog/threat-research/2015/11/china-based-threat.html",
                    "https://www.cfr.org/interactive/cyber-operations/admin338"
                ],
                "synonyms": [
                    "Admin338",
                    "Team338",
                    "MAGNESIUM",
                    "admin@338"
                ]
            },
            "related": [
                {
                    "dest-uuid": "16ade1aa-0ea1-4bb7-88cc-9079df2ae756",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "ac4bce1f-b3ec-4c44-bd36-b6cc986b319b",
            "value": "Temper Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "HKG",
                    "USA"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://community.rapid7.com/community/infosec/blog/2013/06/07/keyboy-targeted-attacks-against-vietnam-and-india",
                    "http://www.crowdstrike.com/blog/rhetoric-foreshadows-cyber-activity-in-the-south-china-sea/"
                ],
                "synonyms": [
                    "APT23",
                    "KeyBoy"
                ]
            },
            "uuid": "7f16d1f5-04ee-4d99-abf0-87e1f23f9fee",
            "value": "Pirate Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "Activity: defense and aerospace sectors, also interested in targeting entities in the oil/gas industry.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "United States",
                    "Iranian internet activists"
                ],
                "cfr-target-category": [
                    "Military",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-operation-saffron-rose.pdf",
                    "https://www.crowdstrike.com/blog/cat-scratch-fever-crowdstrike-tracks-newly-reported-iranian-actor-flying-kitten/",
                    "https://www.cfr.org/interactive/cyber-operations/saffron-rose"
                ],
                "synonyms": [
                    "SaffronRose",
                    "Saffron Rose",
                    "AjaxSecurityTeam",
                    "Ajax Security Team",
                    "Group 26",
                    "Sayad"
                ]
            },
            "related": [
                {
                    "dest-uuid": "f873db71-3d53-41d5-b141-530675ade27a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"very-likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f9d6633a-55e6-4adc-9263-6ae080421a13",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f98bac6b-12fd-4cad-be84-c84666932232",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "86724806-7ec9-4a48-a0a7-ecbde3bf4810",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "d56c99fa-4710-472c-81a6-41b7a84ea4be",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "8f5e8dc7-739d-4f5e-a8a1-a66e004d7063",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "ba724df5-9aa0-45ca-8e0e-7101c208ae48",
            "value": "Flying Kitten",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "USA",
                    "IRN"
                ]
            }
        },
        {
            "description": "While tracking a suspected Iran-based threat group known as Threat Group-2889[1] (TG-2889), Dell SecureWorks Counter Threat Unit\u2122 (CTU) researchers uncovered a network of fake LinkedIn profiles. These convincing profiles form a self-referenced network of seemingly established LinkedIn users. CTU researchers assess with high confidence the purpose of this network is to target potential victims through social engineering. Most of the legitimate LinkedIn accounts associated with the fake accounts belong to individuals in the Middle East, and CTU researchers assess with medium confidence that these individuals are likely targets of TG-2889. One of the threat actors responsible for the denial of service attacks against U.S in 2012\u20132013. Three individuals associated with the group\u2014believed to be have been working on behalf of Iran\u2019s Islamic Revolutionary Guard Corps\u2014were indicted by the Justice Department in 2016. ",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Bank of America",
                    "US Bancorp",
                    "Fifth Third Bank",
                    "Citigroup",
                    "PNC",
                    "BB&T",
                    "Wells Fargo",
                    "Capital One",
                    "HSBC"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Denial of service",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "http://www.secureworks.com/cyber-threat-intelligence/threats/suspected-iran-based-hacker-group-creates-network-of-fake-linkedin-profiles/",
                    "https://www.cfr.org/interactive/cyber-operations/itsecteam"
                ],
                "synonyms": [
                    "ITSecTeam",
                    "Threat Group 2889",
                    "TG-2889",
                    "Ghambar"
                ]
            },
            "related": [
                {
                    "dest-uuid": "8f5e8dc7-739d-4f5e-a8a1-a66e004d7063",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "86724806-7ec9-4a48-a0a7-ecbde3bf4810",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "d56c99fa-4710-472c-81a6-41b7a84ea4be",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "11e17436-6ede-4733-8547-4ce0254ea19e",
            "value": "Cutting Kitten",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "USA",
                    "USA",
                    "USA",
                    "USA",
                    "USA",
                    "USA",
                    "USA",
                    "USA",
                    "GBR"
                ]
            }
        },
        {
            "description": "Charming Kitten (aka Parastoo, aka Newscaster) is an group with a suspected nexus to Iran that targets organizations involved in government, defense technology, military, and diplomacy sectors.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "U.S. government/defense sector websites",
                    "Saudi Arabia",
                    "Israel",
                    "Iraq",
                    "United Kingdom"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://en.wikipedia.org/wiki/Operation_Newscaster",
                    "https://iranthreats.github.io/resources/macdownloader-macos-malware/",
                    "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2014/2014.05.28.NewsCaster_An_Iranian_Threat_Within_Social_Networks/file-2581720763-pdf.pdf",
                    "https://www.forbes.com/sites/thomasbrewster/2017/07/27/iran-hackers-oilrig-use-fake-personas-on-facebook-linkedin-for-cyberespionage/",
                    "https://cryptome.org/2012/11/parastoo-hacks-iaea.htm",
                    "https://securelist.com/files/2017/03/Report_Shamoon_StoneDrill_final.pdf",
                    "https://securelist.com/blog/software/74503/freezer-paper-around-free-meat/",
                    "https://www.verfassungsschutz.de/download/broschuere-2016-10-bfv-cyber-brief-2016-04.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/newscaster",
                    "https://www.washingtontimes.com/news/2014/may/29/iranian-hackers-sucker-punch-us-defense-heads-crea/",
                    "https://securelist.com/freezer-paper-around-free-meat/74503/",
                    "https://www.scmagazine.com/home/security-news/cybercrime/hbo-breach-accomplished-with-hard-work-by-hacker-poor-security-practices-by-victim/",
                    "http://www.arabnews.com/node/1195681/media",
                    "https://cyware.com/news/iranian-apt-charming-kitten-impersonates-clearsky-the-security-firm-that-uncovered-its-campaigns-7fea0b4f",
                    "https://blog.certfa.com/posts/the-return-of-the-charming-kitten/",
                    "https://www.justice.gov/opa/pr/former-us-counterintelligence-agent-charged-espionage-behalf-iran-four-iranians-charged-cyber",
                    "https://blogs.microsoft.com/on-the-issues/2019/03/27/new-steps-to-protect-customers-from-hacking/",
                    "https://www.clearskysec.com/wp-content/uploads/2017/12/Charming_Kitten_2017.pdf",
                    "https://attack.mitre.org/groups/G0058/"
                ],
                "synonyms": [
                    "Newscaster",
                    "Parastoo",
                    "iKittens",
                    "Group 83",
                    "Newsbeef",
                    "NewsBeef"
                ]
            },
            "related": [
                {
                    "dest-uuid": "7636484c-adc5-45d4-9bfe-c3e062fbc4a0",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f9d6633a-55e6-4adc-9263-6ae080421a13",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "ba724df5-9aa0-45ca-8e0e-7101c208ae48",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f873db71-3d53-41d5-b141-530675ade27a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "86724806-7ec9-4a48-a0a7-ecbde3bf4810",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "d56c99fa-4710-472c-81a6-41b7a84ea4be",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "8f5e8dc7-739d-4f5e-a8a1-a66e004d7063",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "f98bac6b-12fd-4cad-be84-c84666932232",
            "value": "Charming Kitten",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "USA",
                    "SAU",
                    "ISR",
                    "IRQ",
                    "GBR"
                ]
            }
        },
        {
            "description": "Our analysis reveals that APT33 is a capable group that has carried out cyber espionage operations since at least 2013. We assess APT33 works at the behest of the Iranian government.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2017/09/apt33-insights-into-iranian-cyber-espionage.html"
                ],
                "synonyms": [
                    "APT 33",
                    "Elfin",
                    "MAGNALLIUM"
                ]
            },
            "related": [
                {
                    "dest-uuid": "fbd29c89-18ba-4c2d-b792-51c0adee049f",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "accd848b-b8f4-46ba-a408-9063b35cfbf2",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
            "value": "APT33",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "Earliest activity back to November 2008. An established group of cyber attackers based in Iran, who carried on several campaigns in 2013, including a series of attacks targeting political dissidents and those supporting Iranian political opposition.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "http://www.scmagazineuk.com/iran-and-russia-blamed-for-state-sponsored-espionage/article/330401/"
                ],
                "synonyms": [
                    "Group 42"
                ]
            },
            "uuid": "2e77511d-f72f-409e-9b64-e2a15efe9bf4",
            "value": "Magic Kitten",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "Targets Saudi Arabia, Israel, US, Iran, high ranking defense officials, embassies of various target countries, notable Iran researchers, human rights activists, media and journalists, academic institutions and various scholars, including scientists in the fields of physics and nuclear sciences.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Saudi Arabia",
                    "Venezuela",
                    "Afghanistan",
                    "United Arab Emirates",
                    "Iran",
                    "Israel",
                    "Iraq",
                    "Kuwait",
                    "Turkey",
                    "Canada",
                    "Yemen",
                    "United Kingdom",
                    "Egypt",
                    "Syria",
                    "Jordan"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/operation-woolen-goldfish-when-kittens-go-phishing",
                    "https://www.trendmicro.com/cloud-content/us/pdfs/security-intelligence/white-papers/wp-the-spy-kittens-are-back.pdf",
                    "http://www.clearskysec.com/thamar-reservoir/",
                    "https://citizenlab.org/2015/08/iran_two_factor_phishing/",
                    "https://blog.checkpoint.com/wp-content/uploads/2015/11/rocket-kitten-report.pdf",
                    "https://www.symantec.com/connect/blogs/shamoon-multi-staged-destructive-attacks-limited-specific-targets",
                    "https://researchcenter.paloaltonetworks.com/2017/02/unit42-magic-hound-campaign-attacks-saudi-targets/",
                    "https://en.wikipedia.org/wiki/Rocket_Kitten",
                    "https://www.cfr.org/interactive/cyber-operations/rocket-kitten"
                ],
                "synonyms": [
                    "TEMP.Beanie",
                    "Operation Woolen Goldfish",
                    "Operation Woolen-Goldfish",
                    "Thamar Reservoir",
                    "Timberworm"
                ]
            },
            "related": [
                {
                    "dest-uuid": "ba724df5-9aa0-45ca-8e0e-7101c208ae48",
                    "tags": [
                        "estimative-language:likelihood-probability=\"very-likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f9d6633a-55e6-4adc-9263-6ae080421a13",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f98bac6b-12fd-4cad-be84-c84666932232",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "86724806-7ec9-4a48-a0a7-ecbde3bf4810",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "d56c99fa-4710-472c-81a6-41b7a84ea4be",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "8f5e8dc7-739d-4f5e-a8a1-a66e004d7063",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "f873db71-3d53-41d5-b141-530675ade27a",
            "value": "Rocket Kitten",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "SAU",
                    "VEN",
                    "AFG",
                    "ARE",
                    "IRN",
                    "ISR",
                    "IRQ",
                    "KWT",
                    "TUR",
                    "CAN",
                    "YEM",
                    "GBR",
                    "EGY",
                    "SYR",
                    "JOR"
                ]
            }
        },
        {
            "description": "A group of cyber actors utilizing infrastructure located in Iran have been conducting computer network exploitation activity against public and private U.S. organizations, including Cleared Defense Contractors (CDCs), academic institutions, and energy sector companies. This threat actor targets entities in the government, energy, and technology sectors that are located in or do business with Saudi Arabia.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Canada",
                    "France",
                    "Israel",
                    "Mexico",
                    "Saudi Arabia",
                    "China",
                    "Germany",
                    "United States",
                    "Pakistan",
                    "South Korea",
                    "United Kingdom",
                    "India",
                    "Kuwait",
                    "Qatar",
                    "Turkey"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "http://cdn2.hubspot.net/hubfs/270968/assets/Cleaver/Cylance_Operation_Cleaver_Report.pdf",
                    "https://www.secureworks.com/research/the-curious-case-of-mia-ash",
                    "http://www.secureworks.com/cyber-threat-intelligence/threats/suspected-iran-based-hacker-group-creates-network-of-fake-linkedin-profiles/",
                    "https://www.cfr.org/interactive/cyber-operations/operation-cleaver",
                    "https://www.cfr.org/interactive/cyber-operations/magic-hound"
                ],
                "synonyms": [
                    "Operation Cleaver",
                    "Tarh Andishan",
                    "Alibaba",
                    "2889",
                    "TG-2889",
                    "Cobalt Gypsy",
                    "Ghambar",
                    "Cutting Kitten",
                    "Group 41",
                    "Magic Hound"
                ]
            },
            "related": [
                {
                    "dest-uuid": "8f5e8dc7-739d-4f5e-a8a1-a66e004d7063",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "11e17436-6ede-4733-8547-4ce0254ea19e",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "d56c99fa-4710-472c-81a6-41b7a84ea4be",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f9d6633a-55e6-4adc-9263-6ae080421a13",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "ba724df5-9aa0-45ca-8e0e-7101c208ae48",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f98bac6b-12fd-4cad-be84-c84666932232",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f873db71-3d53-41d5-b141-530675ade27a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "86724806-7ec9-4a48-a0a7-ecbde3bf4810",
            "value": "Cleaver",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "CAN",
                    "FRA",
                    "ISR",
                    "MEX",
                    "SAU",
                    "CHN",
                    "DEU",
                    "USA",
                    "PAK",
                    "KOR",
                    "GBR",
                    "IND",
                    "KWT",
                    "QAT",
                    "TUR"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of"
            },
            "uuid": "1de1a64e-ea14-4e79-9e41-6958bdb6c0ff",
            "value": "Sands Casino",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "This is a pro-Islamist organization that generally conducts attacks motivated by real world events in which its members believe that members of the Muslim faith were wronged. Its attacks generally involve website defacements; however, the group did develop a RAT that it refers to as Fallaga RAT, but which appears to simply be a fork of the njRAT malware popular amongst hackers in the Middle East/North Africa region.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Tunisia",
                "motive": "Hacktivism-Nationalist",
                "synonyms": [
                    "FallagaTeam"
                ]
            },
            "uuid": "29af2812-f7fb-4edb-8cc4-86d0d9e3644b",
            "value": "Rebel Jackal",
            "aptmap": {
                "operatingFrom": "TUN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "United Arab Emirates",
                "synonyms": [
                    "Vikingdom"
                ]
            },
            "uuid": "7f99ba32-421c-4905-9deb-006e8eda40c1",
            "value": "Viking Jackal",
            "aptmap": {
                "operatingFrom": "ARE",
                "victims": []
            }
        },
        {
            "description": "The Sofacy Group (also known as APT28, Pawn Storm, Fancy Bear and Sednit) is a cyber espionage group believed to have ties to the Russian government. Likely operating since 2007, the group is known to target government, military, and security organizations. It has been characterized as an advanced persistent threat.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "Georgia",
                    "France",
                    "Jordan",
                    "United States",
                    "Hungary",
                    "World Anti-Doping Agency",
                    "Armenia",
                    "Tajikistan",
                    "Japan",
                    "NATO",
                    "Ukraine",
                    "Belgium",
                    "Pakistan",
                    "Asia Pacific Economic Cooperation",
                    "International Association of Athletics Federations",
                    "Turkey",
                    "Mongolia",
                    "OSCE",
                    "United Kingdom",
                    "Germany",
                    "Poland",
                    "European Commission",
                    "Afghanistan",
                    "Kazakhstan",
                    "China"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "https://en.wikipedia.org/wiki/Sofacy_Group",
                    "https://aptnotes.malwareconfig.com/web/viewer.html?file=../APTnotes/2014/apt28.pdf",
                    "http://www.trendmicro.com/cloud-content/us/pdfs/security-intelligence/white-papers/wp-operation-pawn-storm.pdf",
                    "https://www2.fireeye.com/rs/848-DID-242/images/wp-mandiant-matryoshka-mining.pdf",
                    "https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/",
                    "http://researchcenter.paloaltonetworks.com/2016/06/unit42-new-sofacy-attacks-against-us-government-agency/",
                    "https://www.cfr.org/interactive/cyber-operations/apt-28",
                    "https://blogs.microsoft.com/on-the-issues/2018/08/20/we-are-taking-new-steps-against-broadening-threats-to-democracy/",
                    "https://www.bleepingcomputer.com/news/security/microsoft-disrupts-apt28-hacking-campaign-aimed-at-us-midterm-elections/",
                    "https://www.bleepingcomputer.com/news/security/apt28-uses-lojax-first-uefi-rootkit-seen-in-the-wild/",
                    "https://www.accenture.com/us-en/blogs/blogs-snakemackerel-delivers-zekapab-malware"
                ],
                "synonyms": [
                    "APT 28",
                    "APT28",
                    "Pawn Storm",
                    "PawnStorm",
                    "Fancy Bear",
                    "Sednit",
                    "SNAKEMACKEREL",
                    "TsarTeam",
                    "Tsar Team",
                    "TG-4127",
                    "Group-4127",
                    "STRONTIUM",
                    "TAG_0700",
                    "Swallowtail",
                    "IRON TWILIGHT",
                    "Group 74"
                ]
            },
            "related": [
                {
                    "dest-uuid": "bef4c620-0787-42a8-a96d-b7eb6e85917c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "213cdde9-c11a-4ea9-8ce0-c868e9826fec",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "5b4ee3ea-eee3-4c8e-8323-85ae32658754",
            "value": "Sofacy",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "GEO",
                    "FRA",
                    "JOR",
                    "USA",
                    "HUN",
                    "CAN",
                    "ARM",
                    "TJK",
                    "JPN",
                    "UKR",
                    "BEL",
                    "PAK",
                    "SGP",
                    "MCO",
                    "TUR",
                    "MNG",
                    "AUT",
                    "GBR",
                    "DEU",
                    "POL",
                    "AFG",
                    "KAZ",
                    "CHN"
                ]
            }
        },
        {
            "description": "A 2015 report by F-Secure describe APT29 as: 'The Dukes are a well-resourced, highly dedicated and organized cyberespionage group that we believe has been working for the Russian Federation since at least 2008 to collect intelligence in support of foreign and security policy decision-making. The Dukes show unusual confidence in their ability to continue successfully compromising their targets, as well as in their ability to operate with impunity. The Dukes primarily target Western governments and related organizations, such as government ministries and agencies, political think tanks, and governmental subcontractors. Their targets have also included the governments of members of the Commonwealth of Independent States;Asian, African, and Middle Eastern governments;organizations associated with Chechen extremism;and Russian speakers engaged in the illicit trade of controlled substances and drugs. The Dukes are known to employ a vast arsenal of malware toolsets, which we identify as MiniDuke, CosmicDuke, OnionDuke, CozyDuke, CloudDuke, SeaDuke, HammerDuke, PinchDuke, and GeminiDuke. In recent years, the Dukes have engaged in apparently biannual large - scale spear - phishing campaigns against hundreds or even thousands of recipients associated with governmental institutions and affiliated organizations. These campaigns utilize a smash - and - grab approach involving a fast but noisy breakin followed by the rapid collection and exfiltration of as much data as possible.If the compromised target is discovered to be of value, the Dukes will quickly switch the toolset used and move to using stealthier tactics focused on persistent compromise and long - term intelligence gathering. This threat actor targets government ministries and agencies in the West, Central Asia, East Africa, and the Middle East; Chechen extremist groups; Russian organized crime; and think tanks. It is suspected to be behind the 2015 compromise of unclassified networks at the White House, Department of State, Pentagon, and the Joint Chiefs of Staff. The threat actor includes all of the Dukes tool sets, including MiniDuke, CosmicDuke, OnionDuke, CozyDuke, SeaDuke, CloudDuke (aka MiniDionis), and HammerDuke (aka Hammertoss). '",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "United States",
                    "China",
                    "New Zealand",
                    "Ukraine",
                    "Romania",
                    "Georgia",
                    "Japan",
                    "South Korea",
                    "Belgium",
                    "Kazakhstan",
                    "Brazil",
                    "Mexico",
                    "Turkey",
                    "Portugal",
                    "India"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "https://labsblog.f-secure.com/2015/09/17/the-dukes-7-years-of-russian-cyber-espionage/",
                    "https://www2.fireeye.com/rs/848-DID-242/images/rpt-apt29-hammertoss.pdf",
                    "https://www.us-cert.gov/sites/default/files/publications/AR-17-20045_Enhanced_Analysis_of_GRIZZLY_STEPPE_Activity.pdf",
                    "https://www.fireeye.com/blog/threat-research/2017/03/dissecting_one_ofap.html",
                    "https://www.cfr.org/interactive/cyber-operations/dukes",
                    "https://pylos.co/2018/11/18/cozybear-in-from-the-cold/",
                    "https://cloudblogs.microsoft.com/microsoftsecure/2018/12/03/analysis-of-cyberattack-on-u-s-think-tanks-non-profits-public-sector-by-unidentified-attackers/"
                ],
                "synonyms": [
                    "Dukes",
                    "Group 100",
                    "Cozy Duke",
                    "CozyDuke",
                    "EuroAPT",
                    "CozyBear",
                    "CozyCar",
                    "Cozer",
                    "Office Monkeys",
                    "OfficeMonkeys",
                    "APT29",
                    "Cozy Bear",
                    "The Dukes",
                    "Minidionis",
                    "SeaDuke",
                    "Hammer Toss",
                    "YTTRIUM",
                    "Iron Hemlock",
                    "Grizzly Steppe"
                ]
            },
            "related": [
                {
                    "dest-uuid": "899ce53f-13a0-479b-a0e4-67d46e241542",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "b2056ff0-00b9-482e-b11c-c771daa5f28a",
            "value": "APT 29",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "USA",
                    "CHN",
                    "NZL",
                    "UKR",
                    "ROU",
                    "GEO",
                    "JPN",
                    "KOR",
                    "BEL",
                    "KAZ",
                    "BRA",
                    "MEX",
                    "TUR",
                    "PRT",
                    "IND"
                ]
            }
        },
        {
            "description": "A 2014 Guardian article described Turla as: 'Dubbed the Turla hackers, initial intelligence had indicated western powers were key targets, but it was later determined embassies for Eastern Bloc nations were of more interest. Embassies in Belgium, Ukraine, China, Jordan, Greece, Kazakhstan, Armenia, Poland, and Germany were all attacked, though researchers from Kaspersky Lab and Symantec could not confirm which countries were the true targets. In one case from May 2012, the office of the prime minister of a former Soviet Union member country was infected, leading to 60 further computers being affected, Symantec researchers said. There were some other victims, including the ministry for health of a Western European country, the ministry for education of a Central American country, a state electricity provider in the Middle East and a medical organisation in the US, according to Symantec. It is believed the group was also responsible for a much - documented 2008 attack on the US Central Command. The attackers - who continue to operate - have ostensibly sought to carry out surveillance on targets and pilfer data, though their use of encryption across their networks has made it difficult to ascertain exactly what the hackers took.Kaspersky Lab, however, picked up a number of the attackers searches through their victims emails, which included terms such as Nato and EU energy dialogue Though attribution is difficult to substantiate, Russia has previously been suspected of carrying out the attacks and Symantecs Gavin O\u2019 Gorman told the Guardian a number of the hackers appeared to be using Russian names and language in their notes for their malicious code. Cyrillic was also seen in use.'",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "France",
                    "Romania",
                    "Kazakhstan",
                    "Poland",
                    "Tajikistan",
                    "Russia",
                    "United States",
                    "Saudi Arabia",
                    "Germany",
                    "India",
                    "Belarus",
                    "Netherlands",
                    "Iran",
                    "Uzbekistan",
                    "Iraq"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "https://www.first.org/resources/papers/tbilisi2014/turla-operations_and_development.pdf",
                    "https://www.circl.lu/pub/tr-25/",
                    "https://www.theguardian.com/technology/2014/aug/07/turla-hackers-spying-governments-researcher-kaspersky-symantec",
                    "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/waterbug-attack-group.pdf",
                    "https://securelist.com/analysis/publications/65545/the-epic-turla-operation/",
                    "https://securelist.com/blog/research/72081/satellite-turla-apt-command-and-control-in-the-sky/",
                    "https://securelist.com/blog/research/67962/the-penquin-turla-2/",
                    "https://www2.fireeye.com/rs/848-DID-242/images/rpt-witchcoven.pdf",
                    "https://www.welivesecurity.com/2017/03/30/carbon-paper-peering-turlas-second-stage-backdoor/",
                    "https://www.cfr.org/interactive/cyber-operations/turla",
                    "https://www.bleepingcomputer.com/news/security/turla-outlook-backdoor-uses-clever-tactics-for-stealth-and-persistence/",
                    "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2018/november/turla-png-dropper-is-back/",
                    "http://download.bitdefender.com/resources/files/News/CaseStudies/study/115/Bitdefender-Whitepaper-PAC-A4-en-EN1.pdf"
                ],
                "synonyms": [
                    "Turla",
                    "Snake",
                    "Venomous Bear",
                    "Group 88",
                    "Waterbug",
                    "WRAITH",
                    "Turla Team",
                    "Uroburos",
                    "Pfinet",
                    "TAG_0530",
                    "KRYPTON",
                    "Hippo Team",
                    "Pacifier APT",
                    "Popeye"
                ]
            },
            "related": [
                {
                    "dest-uuid": "7a19ecb1-3c65-4de3-a230-993516aed6a6",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "c097471c-2405-4393-b6d7-afbcb5f0cd11",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "fa80877c-f509-4daf-8b62-20aba1635f68",
            "value": "Turla Group",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "FRA",
                    "ROU",
                    "KAZ",
                    "POL",
                    "TJK",
                    "RUS",
                    "USA",
                    "SAU",
                    "DEU",
                    "IND",
                    "BLR",
                    "NLD",
                    "IRN",
                    "UZB",
                    "IRQ"
                ]
            }
        },
        {
            "description": "A Russian group that collects intelligence on the energy industry.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "United States",
                    "Germany",
                    "Turkey",
                    "China",
                    "Spain",
                    "France",
                    "Ireland",
                    "Japan",
                    "Italy",
                    "Poland"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "http://www.scmagazineuk.com/iran-and-russia-blamed-for-state-sponsored-espionage/article/330401/",
                    "http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/Dragonfly_Threat_Against_Western_Energy_Suppliers.pdf",
                    "http://www.netresec.com/?page=Blog&month=2014-10&post=Full-Disclosure-of-Havex-Trojans",
                    "https://threatpost.com/energy-watering-hole-attack-used-lightsout-exploit-kit/104772/",
                    "https://www.cfr.org/interactive/cyber-operations/crouching-yeti",
                    "https://ssu.gov.ua/sbu/control/uk/publish/article?art_id=170951&cat_i=39574",
                    "https://www.reuters.com/article/us-ukraine-cyber-attack-energy-idUSKBN1521BA",
                    "https://dragos.com/wp-content/uploads/CrashOverride-01.pdf",
                    "https://www.independent.ie/irish-news/statesponsored-hackers-targeted-eirgrid-electricity-network-in-devious-attack-36005921.html",
                    "https://www.riskiq.com/blog/labs/energetic-bear/",
                    "https://www.symantec.com/blogs/threat-intelligence/dragonfly-energy-sector-cyber-attacks",
                    "https://www.kaspersky.com/resource-center/threats/crouching-yeti-energetic-bear-malware-threat",
                    "https://www.sans.org/reading-room/whitepapers/ICS/impact-dragonfly-malware-industrial-control-systems-36672",
                    "https://attack.mitre.org/groups/G0035/"
                ],
                "synonyms": [
                    "Dragonfly",
                    "Crouching Yeti",
                    "Group 24",
                    "Havex",
                    "CrouchingYeti",
                    "Koala Team"
                ]
            },
            "related": [
                {
                    "dest-uuid": "1c63d4ec-0a75-4daa-b1df-0d11af3d3cc1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "64d6559c-6d5c-4585-bbf9-c17868f763ee",
            "value": "Energetic Bear",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "USA",
                    "DEU",
                    "TUR",
                    "CHN",
                    "ESP",
                    "FRA",
                    "IRL",
                    "JPN",
                    "ITA",
                    "POL"
                ]
            }
        },
        {
            "description": "This threat actor targets industrial control systems, using a tool called Black Energy, associated with electricity and power generation for espionage, denial of service, and data destruction purposes. Some believe that the threat actor is linked to the 2015 compromise of the Ukrainian electrical grid and a distributed denial of service prior to the Russian invasion of Georgia. Believed to be responsible for the 2008 DDoS attacks in Georgia and the 2015 Ukraine power grid outage",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "Russia",
                    "Lithuania",
                    "Kyrgyzstan",
                    "Israel",
                    "Ukraine",
                    "Belarus",
                    "Kazakhstan",
                    "Georgia",
                    "Poland",
                    "Azerbaijan",
                    "Iran"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "http://www.isightpartners.com/2014/10/cve-2014-4114/",
                    "http://www.isightpartners.com/2016/01/ukraine-and-sandworm-team/",
                    "https://dragos.com/blog/crashoverride/CrashOverride-01.pdf",
                    "https://www.us-cert.gov/ncas/alerts/TA17-163A",
                    "https://ics.sans.org/blog/2016/01/09/confirmation-of-a-coordinated-attack-on-the-ukrainian-power-grid",
                    "https://www.cfr.org/interactive/cyber-operations/black-energy"
                ],
                "synonyms": [
                    "Sandworm Team",
                    "Black Energy",
                    "BlackEnergy",
                    "Quedagh",
                    "Voodoo Bear",
                    "TEMP.Noble"
                ]
            },
            "related": [
                {
                    "dest-uuid": "381fcf73-60f6-4ab2-9991-6af3cbc35192",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b47250ec-2094-4d06-b658-11456e05fe89",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "feac86e4-6bb2-4ba0-ac99-806aeb0a776c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "d52ca4c4-d214-11e8-8d29-c3e7cb78acce",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "f512de42-f76b-40d2-9923-59e7dbdfec35",
            "value": "Sandworm",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "RUS",
                    "LTU",
                    "KGZ",
                    "ISR",
                    "UKR",
                    "BLR",
                    "KAZ",
                    "GEO",
                    "POL",
                    "AZE",
                    "IRN"
                ]
            }
        },
        {
            "description": "We will refer to the gang behind the malware as TeleBots. However it\u2019s important to say that these attackers, and the toolset used, share a number of similarities with the BlackEnergy group, which conducted attacks against the energy industry in Ukraine in December 2015 and January 2016. In fact, we think that the BlackEnergy group has evolved into the TeleBots group.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation",
                "refs": [
                    "http://www.welivesecurity.com/2016/12/13/rise-telebots-analyzing-disruptive-killdisk-attacks/"
                ],
                "synonyms": [
                    "Sandworm"
                ]
            },
            "related": [
                {
                    "dest-uuid": "381fcf73-60f6-4ab2-9991-6af3cbc35192",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f512de42-f76b-40d2-9923-59e7dbdfec35",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "feac86e4-6bb2-4ba0-ac99-806aeb0a776c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "b47250ec-2094-4d06-b658-11456e05fe89",
            "value": "TeleBots",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "description": "Groups targeting financial organizations or people with significant financial assets.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation",
                "motive": "Cybercrime",
                "refs": [
                    "https://en.wikipedia.org/wiki/Carbanak",
                    "https://securelist.com/files/2015/02/Carbanak_APT_eng.pdf",
                    "http://2014.zeronights.ru/assets/files/slides/ivanovb-zeronights.pdf",
                    "https://www.symantec.com/connect/blogs/odinaff-new-trojan-used-high-level-financial-attacks",
                    "https://blog.cyber4sight.com/2017/04/similarities-between-carbanak-and-fin7-malware-suggest-actors-are-closely-related/",
                    "https://www.proofpoint.com/us/threat-insight/post/fin7carbanak-threat-actor-unleashes-bateleur-jscript-backdoor",
                    "https://www.icebrg.io/blog/footprints-of-fin7-tracking-actor-patterns",
                    "https://www.crowdstrike.com/blog/arrests-put-new-focus-on-carbon-spider-adversary-group/",
                    "https://www.europol.europa.eu/newsroom/news/mastermind-behind-eur-1-billion-cyber-bank-robbery-arrested-in-spain",
                    "https://www.computerweekly.com/news/252446153/Three-Carbanak-cyber-heist-gang-members-arrested",
                    "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064518/Carbanak_APT_eng.pdf",
                    "https://www.group-ib.com/resources/threat-research/Anunak_APT_against_financial_institutions.pdf",
                    "https://attack.mitre.org/groups/G0008/",
                    "https://www.fireeye.com/blog/threat-research/2017/03/fin7_spear_phishing.html",
                    "https://threatpost.com/fileless-malware-campaigns-tied-to-same-attacker/124369/",
                    "https://www.fireeye.com/blog/threat-research/2017/04/fin7-phishing-lnk.html",
                    "https://www.fireeye.com/blog/threat-research/2017/05/fin7-shim-databases-persistence.html",
                    "http://blog.morphisec.com/fin7-attacks-restaurant-industry",
                    "https://www.flashpoint-intel.com/blog/fin7-revisited-inside-astra-panel-and-sqlrat-malware/",
                    "http://blog.morphisec.com/fin7-attack-modifications-revealed",
                    "http://blog.morphisec.com/fin7-not-finished-morphisec-spots-new-campaign",
                    "https://securelist.com/fin7-5-the-infamous-cybercrime-rig-fin7-continues-its-activities/90703/",
                    "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html",
                    "https://attack.mitre.org/groups/G0046/"
                ],
                "synonyms": [
                    "Carbanak",
                    "Carbon Spider",
                    "FIN7"
                ]
            },
            "related": [
                {
                    "dest-uuid": "3753cc21-2dae-4dfb-8481-d004e74502cc",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "55033a4d-3ffe-46b2-99b4-2c1541e9ce1c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "00220228-a5a4-4032-a30d-826bb55aa3fb",
            "value": "Anunak",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "Hungary",
                    "Belarus"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "https://securelist.com/blog/incidents/35520/the-teamspy-crew-attacks-abusing-teamviewer-for-cyberespionage-8/",
                    "https://www.cfr.org/interactive/cyber-operations/team-spy-crew"
                ],
                "synonyms": [
                    "TeamSpy",
                    "Team Bear",
                    "Berserk Bear",
                    "Anger Bear"
                ]
            },
            "related": [
                {
                    "dest-uuid": "90ef600f-5198-44a9-a2c6-de4b4d9d8624",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "82c1c7fa-c67b-4be6-9be8-8aa400ef2445",
            "value": "TeamSpy Crew",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "HUN",
                    "BLR"
                ]
            }
        },
        {
            "description": "Buhtrap has been active since 2014, however their first attacks against financial institutions were only detected in August 2015. Earlier, the group had only focused on targeting banking clients. At the moment, the group is known to target Russian and Ukrainian banks.\nFrom August 2015 to February 2016 Buhtrap managed to conduct 13 successful attacks against Russian banks for a total amount of 1.8 billion rubles ($25.7 mln). The number of successful attacks against Ukrainian banks has not been identified.\nBuhtrap is the first hacker group using a network worm to infect the overall bank infrastructure that significantly increases the difficulty of removing all malicious functions from the network. As a result, banks have to shut down the whole infrastructure which provokes delay in servicing customers and additional losses.\nMalicious programs intentionally scan for machines with an automated Bank-Customer system of the Central Bank of Russia (further referred to as BCS CBR). We have not identified incidents of attacks involving online money transfer systems, ATM machines or payment gates which are known to be of interest for other criminal groups.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation",
                "refs": [
                    "https://www.welivesecurity.com/2015/11/11/operation-buhtrap-malware-distributed-via-ammyy-com/",
                    "https://www.group-ib.com/brochures/gib-buhtrap-report.pdf",
                    "https://www.symantec.com/connect/blogs/russian-bank-employees-received-fake-job-offers-targeted-email-attack",
                    "https://www.forcepoint.com/blog/security-labs/highly-evasive-code-injection-awaits-user-interaction-delivering-malware",
                    "https://www.kaspersky.com/blog/financial-trojans-2019/25690/",
                    "https://www.welivesecurity.com/2015/04/09/operation-buhtrap/"
                ]
            },
            "uuid": "b737c51f-b579-49d5-a907-743b2e6d03cb",
            "value": "BuhTrap",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation"
            },
            "related": [
                {
                    "dest-uuid": "82c1c7fa-c67b-4be6-9be8-8aa400ef2445",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "90ef600f-5198-44a9-a2c6-de4b4d9d8624",
            "value": "Berserk Bear",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "description": "FIN4 is a financially-motivated threat group that has targeted confidential information related to the public financial market, particularly regarding healthcare and pharmaceutical companies, since at least 2013. FIN4 is unique in that they do not infect victims with typical persistent malware, but rather they focus on capturing credentials authorized to access email and other non-public correspondence.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Romania",
                "refs": [
                    "https://www.reuters.com/article/2015/06/23/us-hackers-insidertrading-idUSKBN0P31M720150623",
                    "https://www.fireeye.com/blog/threat-research/2014/11/fin4_stealing_insid.html",
                    "https://www2.fireeye.com/rs/fireye/images/rpt-fin4.pdf",
                    "https://pwc.blogs.com/cyber_security_updates/2015/06/unfin4ished-business.html",
                    "https://attack.mitre.org/groups/G0085/"
                ],
                "synonyms": [
                    "FIN4"
                ]
            },
            "uuid": "ff449346-aa9f-45f6-b482-71e886a5cf57",
            "value": "Wolf Spider",
            "aptmap": {
                "operatingFrom": "ROU",
                "victims": []
            }
        },
        {
            "description": "First observed activity in December 2013.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation"
            },
            "uuid": "85b40169-3d1c-491b-9fbf-877ed57f32e0",
            "value": "Boulder Bear",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "description": "This group's activity was first observed in November 2013. It leverages a banking Trojan more commonly known as Shylock which aims to compromise online banking credentials and credentials related to Bitcoin wallets.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation"
            },
            "uuid": "7dd7a8df-9012-4d14-977f-b3f9f71266b4",
            "value": "Shark Spider",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "description": "Adversary targeting manufacturing and industrial organizations.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation",
                "refs": [
                    "http://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf"
                ]
            },
            "uuid": "db774b7d-a0ee-4375-b24e-fd278f5ab2fd",
            "value": "Union Spider",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Korea, Democratic People's Republic of",
                "refs": [
                    "http://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf"
                ],
                "synonyms": [
                    "OperationTroy",
                    "Guardian of Peace",
                    "GOP",
                    "WHOis Team"
                ]
            },
            "uuid": "245c8dde-ed42-4c49-b48b-634e3e21bdd7",
            "value": "Silent Chollima",
            "aptmap": {
                "operatingFrom": "PRK",
                "victims": []
            }
        },
        {
            "description": "Since 2009, HIDDEN COBRA actors have leveraged their capabilities to target and compromise a range of victims; some intrusions have resulted in the exfiltration of data while others have been disruptive in nature. Commercial reporting has referred to this activity as Lazarus Group and Guardians of Peace. Tools and capabilities used by HIDDEN COBRA actors include DDoS botnets, keyloggers, remote access tools (RATs), and wiper malware. Variants of malware and tools used by HIDDEN COBRA actors include Destover, Duuzer, and Hangman.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Korea (Democratic People's Republic of)",
                "cfr-suspected-victims": [
                    "South Korea",
                    "Bangladesh Bank",
                    "Sony Pictures Entertainment",
                    "United States",
                    "Thailand",
                    "France",
                    "China",
                    "Hong Kong",
                    "United Kingdom",
                    "Guatemala",
                    "Canada",
                    "Bangladesh",
                    "Japan",
                    "India",
                    "Germany",
                    "Brazil",
                    "Thailand",
                    "Australia",
                    "Cryptocurrency exchanges in South Korea"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": [
                    "Espionage",
                    "Sabotage"
                ],
                "country": "Korea, Democratic People's Republic of",
                "refs": [
                    "https://threatpost.com/operation-blockbuster-coalition-ties-destructive-attacks-to-lazarus-group/116422/",
                    "https://www.us-cert.gov/ncas/alerts/TA17-164A",
                    "https://securelist.com/lazarus-under-the-hood/77908/",
                    "http://www.mcafee.com/us/resources/white-papers/wp-dissecting-operation-troy.pdf",
                    "https://www.us-cert.gov/HIDDEN-COBRA-North-Korean-Malicious-Cyber-Activity",
                    "https://www.us-cert.gov/ncas/alerts/TA17-318A",
                    "https://www.us-cert.gov/ncas/alerts/TA17-318B",
                    "https://www.bleepingcomputer.com/news/security/north-korean-hackers-are-up-to-no-good-again/",
                    "https://www.cfr.org/interactive/cyber-operations/lazarus-group",
                    "https://www.cfr.org/interactive/cyber-operations/operation-ghostsecret",
                    "https://securelist.com/operation-applejeus/87553/",
                    "https://www.cfr.org/interactive/cyber-operations/compromise-cryptocurrency-exchanges-south-korea",
                    "https://www.bleepingcomputer.com/news/security/lazarus-group-deploys-its-first-mac-malware-in-cryptocurrency-exchange-hack/",
                    "https://content.fireeye.com/apt/rpt-apt38"
                ],
                "synonyms": [
                    "Operation DarkSeoul",
                    "Dark Seoul",
                    "Hidden Cobra",
                    "Hastati Group",
                    "Andariel",
                    "Unit 121",
                    "Bureau 121",
                    "NewRomanic Cyber Army Team",
                    "Bluenoroff",
                    "Group 77",
                    "Labyrinth Chollima",
                    "Operation Troy",
                    "Operation GhostSecret",
                    "Operation AppleJeus",
                    "APT38",
                    "Stardust Chollima"
                ]
            },
            "related": [
                {
                    "dest-uuid": "c93fccb1-e8e8-42cf-ae33-2ad1d183913a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "027a1428-6e79-4a4b-82b9-e698e8525c2b",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b06c3af1-0243-4428-88da-b3451c345e1e",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "68391641-859f-4a9a-9a1e-3e5cf71ec376",
            "value": "Lazarus Group",
            "aptmap": {
                "operatingFrom": "PRK",
                "victims": [
                    "KOR",
                    "BGD",
                    "USA",
                    "USA",
                    "THA",
                    "FRA",
                    "CHN",
                    "HKG",
                    "GBR",
                    "GTM",
                    "CAN",
                    "BGD",
                    "JPN",
                    "IND",
                    "DEU",
                    "BRA",
                    "THA",
                    "AUS",
                    "KOR"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "India",
                "refs": [
                    "http://enterprise-manage.norman.c.bitbit.net/resources/files/Unveiling_an_Indian_Cyberattack_Infrastructure.pdf"
                ],
                "synonyms": [
                    "Appin",
                    "OperationHangover"
                ]
            },
            "uuid": "e2b87f81-a6a1-4524-b03f-193c3191d239",
            "value": "Viceroy Tiger",
            "aptmap": {
                "operatingFrom": "IND",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "United States of America",
                "synonyms": [
                    "DD4BC",
                    "Ambiorx"
                ]
            },
            "uuid": "dd9806a9-a600-48f8-81fb-07f0f1b7690d",
            "value": "Pizzo Spider",
            "aptmap": {
                "operatingFrom": "USA",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Tunisia",
                "refs": [
                    "https://www.crowdstrike.com/blog/regional-conflict-and-cyber-blowback/"
                ],
                "synonyms": [
                    "TunisianCyberArmy"
                ]
            },
            "uuid": "59d63dd6-f46f-4334-ad15-30d2e1ee0623",
            "value": "Corsair Jackal",
            "aptmap": {
                "operatingFrom": "TUN",
                "victims": []
            }
        },
        {
            "description": "In 2014, researchers at Kaspersky Lab discovered and reported on three zero-days that were being used in cyberattacks in the wild. Two of these zero-day vulnerabilities are associated with an advanced threat actor we call Animal Farm. Over the past few years, Animal Farm has targeted a wide range of global organizations. The group has been active since at least 2009 and there are signs that earlier malware versions  were developed as far back as 2007.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "France",
                "cfr-suspected-victims": [
                    "Syria",
                    "United States",
                    "Netherlands",
                    "Russia",
                    "Spain",
                    "Iran",
                    "China",
                    "Germany",
                    "Algeria",
                    "Norway",
                    "Malaysia",
                    "Turkey",
                    "United Kingdom",
                    "Ivory Coast",
                    "Greece"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "France",
                "refs": [
                    "https://securelist.com/blog/research/69114/animals-in-the-apt-farm/",
                    "https://motherboard.vice.com/read/meet-babar-a-new-malware-almost-certainly-created-by-france",
                    "http://www.cyphort.com/evilbunny-malware-instrumented-lua/",
                    "http://www.cyphort.com/babar-suspected-nation-state-spyware-spotlight/",
                    "https://blog.gdatasoftware.com/blog/article/babar-espionage-software-finally-found-and-put-under-the-microscope.html",
                    "https://www.cfr.org/interactive/cyber-operations/snowglobe"
                ],
                "synonyms": [
                    "Animal Farm"
                ]
            },
            "uuid": "3b8e7462-c83f-4e7d-9511-2fe430d80aab",
            "value": "SNOWGLOBE",
            "aptmap": {
                "operatingFrom": "FRA",
                "victims": [
                    "SYR",
                    "USA",
                    "NLD",
                    "RUS",
                    "ESP",
                    "IRN",
                    "CHN",
                    "DEU",
                    "DZA",
                    "NOR",
                    "MYS",
                    "TUR",
                    "GBR",
                    "CIV",
                    "GRC"
                ]
            }
        },
        {
            "description": "The Syrian Electronic Army (SEA) is a group of computer hackers which first surfaced online in 2011 to support the government of Syrian President Bashar al-Assad. Using spamming, website defacement, malware, phishing, and denial of service attacks, it has targeted political opposition groups, western news organizations, human rights groups and websites that are seemingly neutral to the Syrian conflict. It has also hacked government websites in the Middle East and Europe, as well as US defense contractors. As of 2011 the SEA has been *the first Arab country to have a public Internet Army hosted on its national networks to openly launch cyber attacks on its enemies*. The precise nature of SEA's relationship with the Syrian government has changed over time and is unclear",
            "meta": {
                "attribution-confidence": "50",
                "country": "Syrian Arab Republic",
                "refs": [
                    "https://en.wikipedia.org/wiki/Syrian_Electronic_Army"
                ],
                "synonyms": [
                    "SyrianElectronicArmy",
                    "SEA"
                ]
            },
            "uuid": "4265d44e-8372-4ed0-b428-b331a5443d7d",
            "value": "Deadeye Jackal",
            "aptmap": {
                "operatingFrom": "SYR",
                "victims": []
            }
        },
        {
            "description": "Group targeting Indian Army or related assets in India, as well as activists and civil society in Pakistan. Attribution to a Pakistani connection has been made by TrendMicro and others.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Pakistan",
                "cfr-target-category": [
                    "Civil society",
                    "Military",
                    "Government"
                ],
                "country": "Pakistan",
                "refs": [
                    "http://documents.trendmicro.com/assets/pdf/Indian-military-personnel-targeted-by-information-theft-campaign-cmajor.pdf",
                    "https://www.proofpoint.com/sites/default/files/proofpoint-operation-transparent-tribe-threat-insight-en.pdf",
                    "https://www.amnesty.org/en/documents/asa33/8366/2018/en/",
                    "https://www.crowdstrike.com/blog/adversary-of-the-month-for-may/",
                    "https://unit42.paloaltonetworks.com/unit42-projectm-link-found-between-pakistani-actor-and-operation-transparent-tribe",
                    "https://mkd-cirt.mk/wp-content/uploads/2018/08/20181009_3_1_M-Trends2018-May-2018-compressed.pdf",
                    "https://nciipc.gov.in/documents/NCIIPC_Newsletter_July18.pdf",
                    "https://aisa.org.au//PDF/AISA%20Sydney%20-%20Dec2016.pdf",
                    "https://cysinfo.com/cyber-attack-targeting-cbi-and-possibly-indian-army-officials",
                    "https://s.tencent.com/research/report/669.html"
                ],
                "synonyms": [
                    "C-Major",
                    "Transparent Tribe",
                    "Mythic Leopard",
                    "ProjectM",
                    "APT36",
                    "APT 36",
                    "TMP.Lapis"
                ]
            },
            "related": [
                {
                    "dest-uuid": "2a410eea-a9da-11e8-b404-37b7060746c8",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "acbb5cad-ffe7-4b0e-a57a-2dbc916e8905",
            "value": "Operation C-Major",
            "aptmap": {
                "operatingFrom": "PAK",
                "victims": []
            }
        },
        {
            "description": "This threat actor targets civil society groups and Emirati journalists, activists, and dissidents. ",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "United Arab Emirates",
                "cfr-suspected-victims": [
                    "United Arab Emirates",
                    "United Kingdom"
                ],
                "cfr-target-category": [
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "United Arab Emirates",
                "refs": [
                    "https://citizenlab.org/2016/05/stealth-falcon/",
                    "https://www.cfr.org/interactive/cyber-operations/stealth-falcon",
                    "https://securelist.com/cve-2019-0797-zero-day-vulnerability/89885/"
                ],
                "synonyms": [
                    "FruityArmor"
                ]
            },
            "related": [
                {
                    "dest-uuid": "894aab42-3371-47b1-8859-a4a074c804c8",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "dab75e38-6969-4e78-9304-dc269c3cbcf0",
            "value": "Stealth Falcon",
            "aptmap": {
                "operatingFrom": "ARE",
                "victims": [
                    "ARE",
                    "GBR"
                ]
            }
        },
        {
            "description": "ScarCruft is a relatively new APT group; victims have been observed in several countries, including Russia, Nepal, South Korea, China, India, Kuwait and Romania. The group has several ongoing operations utilizing multiple exploits \u2014 two for Adobe Flash and one for Microsoft Internet Explorer.",
            "meta": {
                "refs": [
                    "https://securelist.com/blog/research/75082/cve-2016-4171-adobe-flash-zero-day-used-in-targeted-attacks/"
                ],
                "synonyms": [
                    "Operation Daybreak",
                    "Operation Erebus"
                ]
            },
            "related": [
                {
                    "dest-uuid": "4a2ce82e-1a74-468a-a6fb-bbead541383c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "50cd027f-df14-40b2-aa22-bf5de5061163",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "bb446dc2-4fee-4212-8b2c-3ffa2917e338",
            "value": "ScarCruft",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "This group created a malware that takes over Android devices and generates $300,000 per month in fraudulent ad revenue.  The group effectively controls an arsenal of over 85 million mobile devices around the world. With the potential to sell access to these devices to the highest bidder",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://blog.checkpoint.com/wp-content/uploads/2016/07/HummingBad-Research-report_FINAL-62916.pdf"
                ]
            },
            "uuid": "12ab5c28-5f38-4a2f-bd40-40e9c500f4ac",
            "value": "HummingBad",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "Dropping Elephant (also known as \u201cChinastrats\u201d and \u201cPatchwork\u201c) is a relatively new threat actor that is targeting a variety of high profile diplomatic and economic targets using a custom set of attack tools. Its victims are all involved with China\u2019s foreign relations in some way, and are generally caught through spear-phishing or watering hole attacks.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "India",
                "cfr-suspected-victims": [
                    "Bangladesh",
                    "Sri Lanka",
                    "Pakistan"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "India",
                "refs": [
                    "https://securelist.com/blog/research/75328/the-dropping-elephant-actor/",
                    "http://www.symantec.com/connect/blogs/patchwork-cyberespionage-group-expands-targets-governments-wide-range-industries",
                    "https://blogs.forcepoint.com/security-labs/monsoon-analysis-apt-campaign",
                    "https://www.cymmetria.com/patchwork-targeted-attack/"
                ],
                "synonyms": [
                    "Chinastrats",
                    "Patchwork",
                    "Monsoon",
                    "Sarit",
                    "Quilted Tiger"
                ]
            },
            "related": [
                {
                    "dest-uuid": "17862c7d-9e60-48a0-b48e-da4dc4c3f6b0",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "9559ecaf-2e75-48a7-aee8-9974020bc772",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "18d473a5-831b-47a5-97a1-a32156299825",
            "value": "Dropping Elephant",
            "aptmap": {
                "operatingFrom": "IND",
                "victims": [
                    "BGD",
                    "LKA",
                    "PAK"
                ]
            }
        },
        {
            "description": "Scarlet Mimic is a threat group that has targeted minority rights activists. This group has not been directly linked to a government source, but the group's motivations appear to overlap with those of the Chinese government. While there is some overlap between IP addresses used by Scarlet Mimic and Putter Panda, it has not been concluded that the groups are the same.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://attack.mitre.org/wiki/Groups",
                    "http://researchcenter.paloaltonetworks.com/2016/01/scarlet-mimic-years-long-espionage-targets-minority-activists/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "c5574ca0-d5a4-490a-b207-e4658e5fd1d7",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "0da10682-85c6-4c0b-bace-ba1f7adfb63e",
            "value": "Scarlet Mimic",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "Poseidon Group is a Portuguese-speaking threat group that has been active since at least 2005. The group has a history of using information exfiltrated from victims to blackmail victim companies into contracting the Poseidon Group as a security firm.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Brazil",
                "refs": [
                    "https://securelist.com/blog/research/73673/poseidon-group-a-targeted-attack-boutique-specializing-in-global-cyber-espionage/",
                    "https://attack.mitre.org/wiki/Groups"
                ]
            },
            "related": [
                {
                    "dest-uuid": "7ecc3b4f-5cdb-457e-b55a-df376b359446",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "5fc09923-fcff-4e81-9cae-4518ef31cf4d",
            "value": "Poseidon Group",
            "aptmap": {
                "operatingFrom": "BRA",
                "victims": []
            }
        },
        {
            "description": "Threat group that has targeted Japanese organizations with phishing emails. Due to overlapping TTPs, including similar custom tools, DragonOK is thought to have a direct or indirect relationship with the threat group Moafee. 2223 It is known to use a variety of malware, including Sysget/HelloBridge, PlugX, PoisonIvy, FormerFirstRat, NFlog, and NewCT.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-operation-quantum-entanglement.pdf",
                    "https://attack.mitre.org/wiki/Groups",
                    "https://blogs.forcepoint.com/security-labs/trojanized-adobe-installer-used-install-dragonok%E2%80%99s-new-custom-backdoor",
                    "http://www.morphick.com/resources/news/deep-dive-dragonok-rambo-backdoor",
                    "https://www.cfr.org/interactive/cyber-operations/moafee",
                    "https://unit42.paloaltonetworks.com/unit-42-identifies-new-dragonok-backdoor-malware-deployed-against-japanese-targets/",
                    "https://unit42.paloaltonetworks.com/unit42-dragonok-updates-toolset-targets-multiple-geographic-regions/",
                    "https://www.phnompenhpost.com/national/kingdom-targeted-new-malware",
                    "https://attack.mitre.org/groups/G0017/"
                ],
                "synonyms": [
                    "Moafee"
                ]
            },
            "related": [
                {
                    "dest-uuid": "2e5d3a83-fe00-41a5-9b60-237efc84832f",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f3bdec95-3d62-42d9-a840-29630f6cdc1a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "a9b44750-992c-4743-8922-129880d277ea",
            "value": "DragonOK",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA"
                ]
            }
        },
        {
            "description": "Chinese threat group that has extensively used strategic Web compromises to target victims.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": " China",
                "cfr-suspected-victims": [
                    "United States",
                    "United Kingdom",
                    "France"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "http://www.secureworks.com/cyber-threat-intelligence/threats/threat-group-3390-targets-organizations-for-cyberespionage/",
                    "https://attack.mitre.org",
                    "https://www.cfr.org/interactive/cyber-operations/emissary-panda"
                ],
                "synonyms": [
                    "TG-3390",
                    "Emissary Panda"
                ]
            },
            "related": [
                {
                    "dest-uuid": "fb366179-766c-4a4a-afa1-52bff1fd601c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "834e0acd-d92a-4e38-bb14-dc4159d7cb32",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "4af45fea-72d3-11e8-846c-d37699506c8d",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "f1b9f7d6-6ab1-404b-91a6-a1ed1845c045",
            "value": "Threat Group-3390",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "GBR",
                    "FRA"
                ]
            }
        },
        {
            "description": "ProjectSauron is the name for a top level modular cyber-espionage platform, designed to enable and manage long-term campaigns through stealthy survival mechanisms coupled with multiple exfiltration methods.  Technical details show how attackers learned from other extremely advanced actors in order to avoid repeating their mistakes. As such, all artifacts are customized per given target, reducing their value as indicators of compromise for any other victim.  Usually APT campaigns have a geographical nexus, aimed at extracting information within a specific region or from a given industry. That usually results in several infections in countries within that region, or in the targeted industry around the world. Interestingly, ProjectSauron seems to be dedicated to just a couple of countries, focused on collecting high value intelligence by compromising almost all key entities it could possibly reach within the target area.  The name, ProjectSauron reflects the fact that the code authors refer to \u2018Sauron\u2019 in the Lua scripts.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "United States",
                "cfr-suspected-victims": [
                    "Russia",
                    "Iran",
                    "Belgium",
                    "China",
                    "Sweden",
                    "Rwanda"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "United States of America",
                "refs": [
                    "https://securelist.com/analysis/publications/75533/faq-the-projectsauron-apt/",
                    "https://www.cfr.org/interactive/cyber-operations/project-sauron"
                ],
                "synonyms": [
                    "Strider",
                    "Sauron",
                    "Project Sauron"
                ]
            },
            "related": [
                {
                    "dest-uuid": "277d2f87-2ae5-4730-a3aa-50c1fdff9656",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "f3179cfb-9c86-4980-bd6b-e4fa74adaaa7",
            "value": "ProjectSauron",
            "aptmap": {
                "operatingFrom": "USA",
                "victims": [
                    "RUS",
                    "IRN",
                    "BEL",
                    "CHN",
                    "SWE",
                    "RWA"
                ]
            }
        },
        {
            "description": "APT 30 is a threat group suspected to be associated with the Chinese government. While Naikon shares some characteristics with APT30, the two groups do not appear to be exact matches.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "India",
                    "Saudi Arabia",
                    "Vietnam",
                    "Myanmar",
                    "Singapore",
                    "Thailand",
                    "Malaysia",
                    "Cambodia",
                    "China",
                    "Phillipines",
                    "South Korea",
                    "United States",
                    "Indonesia",
                    "Laos"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf",
                    "https://attack.mitre.org/wiki/Group/G0013",
                    "https://www.cfr.org/interactive/cyber-operations/apt-30"
                ],
                "synonyms": [
                    "APT30"
                ]
            },
            "related": [
                {
                    "dest-uuid": "2a158b0a-7ef8-43cb-9985-bf34d1e12050",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "2f1fd017-9df6-4759-91fb-e7039609b5ff",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "5e0a7cf2-6107-4d5f-9dd0-9df38b1fcba8",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f047ee18-7985-4946-8bfb-4ed754d3a0dd",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "f26144c5-8593-4e78-831a-11f6452d809b",
            "value": "APT 30",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "IND",
                    "SAU",
                    "VNM",
                    "MMR",
                    "SGP",
                    "THA",
                    "MYS",
                    "KHM",
                    "CHN",
                    "PHL",
                    "KOR",
                    "USA",
                    "IDN",
                    "LAO"
                ]
            }
        },
        {
            "description": "TA530, who we previously examined in relation to large-scale personalized phishing campaigns",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://www.proofpoint.com/uk/threat-insight/post/august-in-december-new-information-stealer-hits-the-scene"
                ]
            },
            "uuid": "4b79d1f6-8333-44b6-ac32-d1ea7e47e77f",
            "value": "TA530",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "GCMAN is a threat group that focuses on targeting banks for the purpose of transferring money to e-currency services.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation",
                "refs": [
                    "https://securelist.com/apt-style-bank-robberies-increase-with-metel-gcman-and-carbanak-2-0-attacks/73638/",
                    "https://attack.mitre.org/groups/G0036/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "0ea72cd5-ca30-46ba-bc04-378f701c658f",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "d93889de-b4bc-4a29-9ce7-d67717c140a0",
            "value": "GCMAN",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "description": "Suckfly is a China-based threat group that has been active since at least 2014",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.symantec.com/connect/blogs/suckfly-revealing-secret-life-your-code-signing-certificates",
                    "http://www.symantec.com/connect/blogs/indian-organizations-targeted-suckfly-attacks"
                ]
            },
            "related": [
                {
                    "dest-uuid": "5cbe0d3b-6fb1-471f-b591-4b192915116d",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "5abb12e7-5066-4f84-a109-49a037205c76",
            "value": "Suckfly",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "FIN is a group targeting financial assets including assets able to do financial transaction including PoS.",
            "meta": {
                "refs": [
                    "https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin6.pdf",
                    "https://www.fireeye.com/blog/threat-research/2019/04/pick-six-intercepting-a-fin6-intrusion.html",
                    "https://attack.mitre.org/groups/G0037/"
                ],
                "synonyms": [
                    "Skeleton Spider"
                ]
            },
            "related": [
                {
                    "dest-uuid": "2a7914cf-dff3-428d-ab0f-1014d1c28aeb",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "647894f6-1723-4cba-aba4-0ef0966d5302",
            "value": "FIN6",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Libyan Scorpions is a malware operation in use since September 2015 and operated by a politically motivated group whose main objective is intelligence gathering, spying on influentials and political figures and operate an espionage campaign within Libya.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Libya"
            },
            "uuid": "815cbe98-e157-4078-9caa-c5a25dd64731",
            "value": "Libyan Scorpions",
            "aptmap": {
                "operatingFrom": "LBY",
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "https://securelist.com/blog/research/76153/teamxrat-brazilian-cybercrime-meets-ransomware/"
                ],
                "synonyms": [
                    "CorporacaoXRat",
                    "CorporationXRat"
                ]
            },
            "uuid": "43ec65d1-a334-4c44-9a44-0fd21f27249d",
            "value": "TeamXRat",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "OilRig is an Iranian threat group operating primarily in the Middle East by targeting organizations in this region that are in a variety of different industries; however, this group has occasionally targeted organizations outside of the Middle East as well. It also appears OilRig carries out supply chain attacks, where the threat group leverages the trust relationship between organizations to attack their primary targets. \r\n\r\nOilRig is an active and organized threat group, which is evident based on their systematic targeting of specific organizations that appear to be carefully chosen for strategic purposes. Attacks attributed to this group primarily rely on social engineering to exploit the human rather than software vulnerabilities; however, on occasion this group has used recently patched vulnerabilities in the delivery phase of their attacks. The lack of software vulnerability exploitation does not necessarily suggest a lack of sophistication, as OilRig has shown maturity in other aspects of their operations. Such maturities involve:\r\n\r\n-Organized evasion testing used the during development of their tools.\r\n-Use of custom DNS Tunneling protocols for command and control (C2) and data exfiltration.\r\n-Custom web-shells and backdoors used to persistently access servers.\r\n\r\nOilRig relies on stolen account credentials for lateral movement. After OilRig gains access to a system, they use credential dumping tools, such as Mimikatz, to steal credentials to accounts logged into the compromised system. The group uses these credentials to access and to move laterally to other systems on the network. After obtaining credentials from a system, operators in this group prefer to use tools other than their backdoors to access the compromised systems, such as remote desktop and putty. OilRig also uses phishing sites to harvest credentials to individuals at targeted organizations to gain access to internet accessible resources, such as Outlook Web Access.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Israel",
                    "Kuwait",
                    "United States",
                    "Turkey",
                    "Saudi Arabia",
                    "Qatar",
                    "Lebanon"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2016/05/targeted_attacksaga.html",
                    "http://researchcenter.paloaltonetworks.com/2016/10/unit42-oilrig-malware-campaign-updates-toolset-and-expands-targets/",
                    "http://researchcenter.paloaltonetworks.com/2016/05/the-oilrig-campaign-attacks-on-saudi-arabian-organizations-deliver-helminth-backdoor/",
                    "http://www.clearskysec.com/oilrig/",
                    "https://cert.gov.il/Updates/Alerts/SiteAssets/CERT-IL-ALERT-W-120.pdf",
                    "http://researchcenter.paloaltonetworks.com/2017/04/unit42-oilrig-actors-provide-glimpse-development-testing-efforts/",
                    "http://blog.morphisec.com/iranian-fileless-cyberattack-on-israel-word-vulnerability%20",
                    "https://www.forbes.com/sites/thomasbrewster/2017/02/15/oilrig-iran-hackers-cyberespionage-us-turkey-saudi-arabia/#56749aa2468a",
                    "https://researchcenter.paloaltonetworks.com/2017/07/unit42-twoface-webshell-persistent-access-point-lateral-movement/",
                    "https://researchcenter.paloaltonetworks.com/2017/12/unit42-introducing-the-adversary-playbook-first-up-oilrig/",
                    "https://pan-unit42.github.io/playbook_viewer/",
                    "https://raw.githubusercontent.com/pan-unit42/playbook_viewer/master/playbook_json/oilrig.json",
                    "https://www.cfr.org/interactive/cyber-operations/oilrig",
                    "https://researchcenter.paloaltonetworks.com/2018/09/unit42-oilrig-uses-updated-bondupdater-target-middle-eastern-government/",
                    "https://researchcenter.paloaltonetworks.com/2018/11/unit42-analyzing-oilrigs-ops-tempo-testing-weaponization-delivery/",
                    "https://www.crowdstrike.com/blog/meet-crowdstrikes-adversary-of-the-month-for-november-helix-kitten/"
                ],
                "synonyms": [
                    "Twisted Kitten",
                    "Cobalt Gypsy",
                    "Crambus",
                    "Helix Kitten"
                ]
            },
            "related": [
                {
                    "dest-uuid": "8f5e8dc7-739d-4f5e-a8a1-a66e004d7063",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "11e17436-6ede-4733-8547-4ce0254ea19e",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "86724806-7ec9-4a48-a0a7-ecbde3bf4810",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "d56c99fa-4710-472c-81a6-41b7a84ea4be",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "4ca1929c-7d64-4aab-b849-badbfc0c760d",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f9d6633a-55e6-4adc-9263-6ae080421a13",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "ba724df5-9aa0-45ca-8e0e-7101c208ae48",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f98bac6b-12fd-4cad-be84-c84666932232",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f873db71-3d53-41d5-b141-530675ade27a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
            "value": "OilRig",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "ISR",
                    "KWT",
                    "USA",
                    "TUR",
                    "SAU",
                    "QAT",
                    "LBN"
                ]
            }
        },
        {
            "description": "Beginning in late 2012, a carefully orchestrated attack campaign we call Volatile Cedar has been targeting individuals, companies and institutions worldwide. This campaign, led by a persistent attacker group, has successfully penetrated a large number of targets using various attack techniques, and specifically, a custom-made malware implant codenamed Explosive .",
            "meta": {
                "refs": [
                    "https://www.checkpoint.com/downloads/volatile-cedar-technical-report.pdf"
                ]
            },
            "uuid": "cf421ce6-ddfe-419a-bc65-6a9fc953232a",
            "value": "Volatile Cedar",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Threat Group conducting cyber espionage while re-using tools from other teams; like those of Hacking Team, and vmprotect to obfuscate.",
            "meta": {
                "synonyms": [
                    "Reuse team",
                    "Dancing Salome"
                ]
            },
            "uuid": "3d5192f2-f235-46fd-aa68-dd00cc17d632",
            "value": "Malware reusers",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Microsoft Threat Intelligence identified similarities between this recent attack and previous 2012 attacks against tens of thousands of computers belonging to organizations in the energy sector. Microsoft Threat Intelligence refers to the activity group behind these attacks as TERBIUM, following our internal practice of assigning rogue actors chemical element names.",
            "meta": {
                "refs": [
                    "https://blogs.technet.microsoft.com/mmpc/2016/12/09/windows-10-protection-detection-and-response-against-recent-attacks/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "99784b80-6298-45ba-885c-0ed37bfd8324",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "46670c51-fea4-45d6-bdd4-62e85a5c7404",
            "value": "TERBIUM",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "In October 2012, malware attacks against Israeli government targets grabbed media attention as officials temporarily cut off Internet access for its entire police force and banned the use of USB memory sticks. Security researchers subsequently linked these attacks to a broader, yearlong campaign that targeted not just Israelis but Palestinians as well. and as discovered later, even the U.S. and UK governments. Further research revealed a connection between these attacks and members of the so-called \u201cGaza Hackers Team.\u201d We refer to this campaign as \u201cMolerats.\u201d",
            "meta": {
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2013/08/operation-molerats-middle-east-cyber-attacks-using-poison-ivy.html",
                    "http://blog.vectranetworks.com/blog/moonlight-middle-east-targeted-attacks",
                    "https://ti.360.net/blog/articles/suspected-molerats-new-attack-in-the-middle-east/"
                ],
                "synonyms": [
                    "Gaza Hackers Team",
                    "Gaza cybergang",
                    "Operation Molerats",
                    "Extreme Jackal",
                    "Moonlight"
                ]
            },
            "related": [
                {
                    "dest-uuid": "df71bb3b-813c-45eb-a8bc-f2a419837411",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "f7c2e501-73b1-400f-a5d9-2e2e07b7dfde",
            "value": "Molerats",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "PROMETHIUM is an activity group that has been active as early as 2012. The group primarily uses Truvasys, a first-stage malware that has been in circulation for several years. Truvasys has been involved in several attack campaigns, where it has masqueraded as one of server common computer utilities, including WinUtils, TrueCrypt, WinRAR, or SanDisk. In each of the campaigns, Truvasys malware evolved with additional features\u2014this shows a close relationship between the activity groups behind the campaigns and the developers of the malware.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Turkey",
                "refs": [
                    "https://blogs.technet.microsoft.com/mmpc/2016/12/14/twin-zero-day-attacks-promethium-and-neodymium-target-individuals-in-europe/",
                    "https://www.virusbulletin.com/conference/vb2016/abstracts/last-minute-paper-strongpity-waterhole-attacks-targeting-italian-and-belgian-encryption-users"
                ],
                "synonyms": [
                    "StrongPity"
                ]
            },
            "related": [
                {
                    "dest-uuid": "efed95ba-d7e8-47ff-8c53-99c42426ee7c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "5744f91a-d2d8-4f92-920f-943dd80c578f",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "43894e2a-174e-4931-94a8-2296afe8f650",
            "value": "PROMETHIUM",
            "aptmap": {
                "operatingFrom": "TUR",
                "victims": []
            }
        },
        {
            "description": "NEODYMIUM is an activity group that is known to use a backdoor malware detected by Microsoft as Wingbird. This backdoor\u2019s characteristics closely match FinFisher, a government-grade commercial surveillance package. Data about Wingbird activity indicate that it is typically used to attack individual computers instead of networks.",
            "meta": {
                "refs": [
                    "https://blogs.technet.microsoft.com/mmpc/2016/12/14/twin-zero-day-attacks-promethium-and-neodymium-target-individuals-in-europe/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "025bdaa9-897d-4bad-afa6-013ba5734653",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "47b5007a-3fb1-466a-9578-629e6e735493",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "ada08ea8-4517-4eea-aff1-3ad69e5466bb",
            "value": "NEODYMIUM",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "A threat group that has been active for at least seven years has used malware, phishing and disinformation tactics to target activists, journalists, politicians and public figures in various Latin American countries.  The threat actor, dubbed Packrat based on its preference for remote access Trojans (RATs) and because it has used the same infrastructure for several years, has been analyzed by Citizen Lab researchers John Scott-Railton, Morgan Marquis-Boire, and Claudio Guarnieri, and Cyphort researcher Marion Marschalek, best known for her extensive analysis of state-sponsored threats.",
            "meta": {
                "refs": [
                    "https://citizenlab.org/2015/12/packrat-report/"
                ]
            },
            "uuid": "fe344665-d153-4d31-a32a-1509efde1ca7",
            "value": "Packrat",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Symantec telemetry identified Cadelle and Chafer activity dating from as far back as July 2014, however, it\u2019s likely that activity began well before this date. Command-and-control (C&C) registrant information points to activity possibly as early as 2011, while executable compilation times suggest early 2012. Their attacks continue to the present day. Symantec estimates that each team is made up of between 5 and 10 people.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets"
                ]
            },
            "uuid": "03f13462-003c-4296-8784-bccea16710a9",
            "value": "Cadelle",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "Symantec telemetry identified Cadelle and Chafer activity dating from as far back as July 2014, however, it\u2019s likely that activity began well before this date. Command-and-control (C&C) registrant information points to activity possibly as early as 2011, while executable compilation times suggest early 2012. Their attacks continue to the present day. Symantec estimates that each team is made up of between 5 and 10 people.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets",
                    "https://www.symantec.com/blogs/threat-intelligence/chafer-latest-attacks-reveal-heightened-ambitions"
                ]
            },
            "uuid": "ddd95696-3d9a-4d0c-beec-a34d396182f3",
            "value": "Chafer",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "The PassCV group continues to be one of the most successful and active threat groups that leverage a wide array of stolen Authenticode-signing certificates.  Snorre Fagerland of Blue Coat Systems first coined the term PassCV in a blog post. His post provides a good introduction to the group and covers some of the older infrastructure, stolen code-signing certificate reuse, and other connections associated with the PassCV malware. There are several clues alluding to the possibility that multiple groups may be utilizing the same stolen signing certificates, but at this time SPEAR believes the current attacks are more likely being perpetrated by a single group employing multiple publicly available Remote Administration Tools (RATs).  The PassCV group has been operating with continued success and has already started to expand their malware repertoire into different off-the-shelf RATs and custom code. SPEAR identified eighteen previously undisclosed stolen Authenticode certificates. These certificates were originally issued to companies and individuals scattered across China, Taiwan, Korea, Europe, the United States and Russia.  In this post we expand the usage of the term \u2018PassCV\u2019 to encompass the malware mentioned in the Blue Coat Systems report, as well as the APT group behind the larger C2 infrastructure and stolen Authenticode certificates. We\u2019d like to share some of our findings as they pertain to the stolen certificates, command and control infrastructure, and some of the newer custom RATs they\u2019ve begun development on. ",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://blog.cylance.com/digitally-signed-malware-targeting-gaming-companies"
                ]
            },
            "uuid": "ceae0bc4-eb5f-4184-b949-a6f7d6f0f965",
            "value": "PassCV",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "A Turkish hacking group, Sath-\u0131 M\u00fcdafaa, is encouraging individuals to join its DDoS-for-Points platform that features points and prizes for carrying out distributed denial-of-service (DDoS) attacks against a list of predetermined targets. Their DDoS tool also contains a backdoor to hack the hackers. So the overarching motivation and allegiance of the group is not entirely clear.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Turkey",
                "motive": "Hacktivists-Nationalists"
            },
            "uuid": "a03e2b4b-617f-4d28-ac4b-9943f792aa22",
            "value": "Sath-\u0131 M\u00fcdafaa",
            "aptmap": {
                "operatingFrom": "TUR",
                "victims": []
            }
        },
        {
            "description": "Turkish nationalist hacktivist group that has been active for roughly one year. According to Domaintools, the group\u2019s site has been registered since December 2015, with an active Twitter account since January 2016. The group carries out distributed denial-of-service (DDoS) attacks and defacements against the sites of news organizations and governments perceived to be critical of Turkey\u2019s policies or leadership, and purports to act in defense of Islam",
            "meta": {
                "attribution-confidence": "50",
                "country": "Turkey",
                "motive": "Hacktivists-Nationalists",
                "synonyms": [
                    "Lion Soldiers Team",
                    "Phantom Turk"
                ]
            },
            "uuid": "23410d3f-c359-422d-9a4e-45f8fdf0c84a",
            "value": "Aslan Neferler Tim",
            "aptmap": {
                "operatingFrom": "TUR",
                "victims": []
            }
        },
        {
            "description": "Ayy\u0131ld\u0131z (Crescent and Star) Tim is a nationalist hacking group founded in 2002. It performs defacements and DDoS attacks against the websites of governments that it considers to be repressing Muslim minorities or engaged in Islamophobic policies.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Turkey",
                "motive": "Hacktivists-Nationalists",
                "synonyms": [
                    "Crescent and Star"
                ]
            },
            "uuid": "ab1771de-25bb-4688-b132-eabb5d6452a1",
            "value": "Ayy\u0131ld\u0131z Tim",
            "aptmap": {
                "operatingFrom": "TUR",
                "victims": []
            }
        },
        {
            "description": "Founded in 2004, Turkhackteam is one of Turkey\u2019s oldest and most high-profile hacking collectives. According to a list compiled on Turkhackteam\u2019s forum, the group has carried out almost 30 highly publicized hacking campaigns targeting foreign government and commercial websites, including websites of international corporations. ",
            "meta": {
                "attribution-confidence": "50",
                "country": "Turkey",
                "motive": "Hacktivists-Nationalists",
                "synonyms": [
                    "Turk Hack Team"
                ]
            },
            "uuid": "7ae74dc6-ded3-4873-a803-abb4160d10c0",
            "value": "TurkHackTeam",
            "aptmap": {
                "operatingFrom": "TUR",
                "victims": []
            }
        },
        {
            "description": "The Equation Group is a highly sophisticated threat actor described by its discoverers at Kaspersky Labs as one of the most sophisticated cyber attack groups in the world, operating alongside but always from a position of superiority with the creators of Stuxnet and Flame",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "United States",
                "cfr-suspected-victims": [
                    "Iran",
                    "Afghanistan",
                    "Syria",
                    "Yemen",
                    "Kenya",
                    "Russia",
                    "India",
                    "Mali",
                    "Algeria",
                    "United Kingdom",
                    "Pakistan",
                    "China",
                    "Lebanon",
                    "United Arab Emirates",
                    "Libya"
                ],
                "cfr-target-category": [
                    "Government",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "United States of America",
                "refs": [
                    "https://en.wikipedia.org/wiki/Equation_Group",
                    "https://www.cfr.org/interactive/cyber-operations/equation-group",
                    "https://arstechnica.com/information-technology/2015/02/how-omnipotent-hackers-tied-to-the-nsa-hid-for-14-years-and-were-found-at-last/",
                    "https://www.dropbox.com/s/buxkfotx1kei0ce/Whitepaper%20Shadow%20Broker%20-%20Equation%20Group%20Hack.pdf?dl=0",
                    "https://en.wikipedia.org/wiki/Stuxnet",
                    "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064459/Equation_group_questions_and_answers.pdf",
                    "https://attack.mitre.org/groups/G0020/"
                ],
                "synonyms": [
                    "Tilded Team",
                    "Lamberts",
                    "EQGRP",
                    "Longhorn"
                ]
            },
            "related": [
                {
                    "dest-uuid": "2f3311cd-8476-4be7-9005-ead920afc781",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "7036fb3d-86b7-4d9c-bc66-1e1ead8b7840",
            "value": "Equation Group",
            "aptmap": {
                "operatingFrom": "USA",
                "victims": [
                    "IRN",
                    "AFG",
                    "SYR",
                    "YEM",
                    "KEN",
                    "RUS",
                    "IND",
                    "MLI",
                    "DZA",
                    "GBR",
                    "PAK",
                    "CHN",
                    "LBN",
                    "ARE",
                    "LBY"
                ]
            }
        },
        {
            "description": "Greenbug was discovered targeting a range of organizations in the Middle East including companies in the aviation, energy, government, investment, and education sectors.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.symantec.com/connect/blogs/greenbug-cyberespionage-group-targeting-middle-east-possible-links-shamoon",
                    "https://researchcenter.paloaltonetworks.com/2017/07/unit42-oilrig-uses-ismdoor-variant-possibly-linked-greenbug-threat-group/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "47204403-34c9-4d25-a006-296a0939d1a2",
            "value": "Greenbug",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "Unit 42 threat researchers have recently observed a threat group distributing new, custom developed malware. We have labelled this threat group the Gamaredon Group and our research shows that the Gamaredon Group has been active since at least 2013.  In the past, the Gamaredon Group has relied heavily on off-the-shelf tools. Our new research shows the Gamaredon Group have made a shift to custom-developed malware. We believe this shift indicates the Gamaredon Group have improved their technical capabilities.",
            "meta": {
                "refs": [
                    "http://researchcenter.paloaltonetworks.com/2017/02/unit-42-title-gamaredon-group-toolset-evolution",
                    "https://www.lookingglasscyber.com/wp-content/uploads/2015/08/Operation_Armageddon_Final.pdf",
                    "https://unit42.paloaltonetworks.com/unit-42-title-gamaredon-group-toolset-evolution/",
                    "https://attack.mitre.org/groups/G0047/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "2e290bfe-93b5-48ce-97d6-edcd6d32b7cf",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "1a77e156-76bc-43f5-bdd7-bd67f30fbbbb",
            "value": "Gamaredon Group",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Hammer Panda is a group of suspected Chinese origin targeting organisations in Russia.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.darkreading.com/endpoint/chinese-cyberspies-pivot-to-russia-in-wake-of-obama-xi-pact/d/d-id/1324242"
                ],
                "synonyms": [
                    "Zhenbao",
                    "TEMP.Zhenbao"
                ]
            },
            "uuid": "1f2762d9-a4b5-4457-ac51-00be05be9e23",
            "value": "Hammer Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "Infy is a group of suspected Iranian origin.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Israel",
                    "Iran",
                    "France",
                    "China",
                    "Sweden",
                    "United States",
                    "United Kingdom",
                    "Germany",
                    "Syria",
                    "Italy",
                    "Denmark",
                    "Canada",
                    "Russia",
                    "Saudi Arabia",
                    "Bahrain"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.blackhat.com/docs/us-16/materials/us-16-Guarnieri-Iran-And-The-Soft-War-For-Internet-Dominance-wp.pdf",
                    "https://iranthreats.github.io/",
                    "http://researchcenter.paloaltonetworks.com/2016/05/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
                    "https://researchcenter.paloaltonetworks.com/2017/08/unit42-prince-persia-ride-lightning-infy-returns-foudre/",
                    "https://www.cfr.org/interactive/cyber-operations/prince-persia"
                ],
                "synonyms": [
                    "Operation Mermaid",
                    "Prince of Persia"
                ]
            },
            "uuid": "1671be1b-c844-48f5-84c8-54ac4fe4d71e",
            "value": "Infy",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "ISR",
                    "IRN",
                    "FRA",
                    "CHN",
                    "SWE",
                    "USA",
                    "GBR",
                    "DEU",
                    "SYR",
                    "ITA",
                    "DNK",
                    "CAN",
                    "RUS",
                    "SAU",
                    "BHR"
                ]
            }
        },
        {
            "description": "Sima is a group of suspected Iranian origin targeting Iranians in diaspora.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.blackhat.com/docs/us-16/materials/us-16-Guarnieri-Iran-And-The-Soft-War-For-Internet-Dominance-wp.pdf",
                    "https://iranthreats.github.io/"
                ]
            },
            "uuid": "80f9184d-1df3-4ad0-a452-cdb90fe57216",
            "value": "Sima",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "Blue Termite is a group of suspected Chinese origin active in Japan.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "Japan"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://securelist.com/blog/research/71876/new-activity-of-the-blue-termite-apt/",
                    "http://www.kaspersky.com/about/news/virus/2015/Blue-Termite-A-Sophisticated-Cyber-Espionage-Campaign-is-After-High-Profile-Japanese-Targets",
                    "https://www.cfr.org/interactive/cyber-operations/blue-termite"
                ],
                "synonyms": [
                    "Cloudy Omega",
                    "Emdivi"
                ]
            },
            "uuid": "a250af72-f66c-4d02-9f36-ab764ce9fe85",
            "value": "Blue Termite",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "JPN"
                ]
            }
        },
        {
            "description": "Groundbait is a group targeting anti-government separatists in the self-declared Donetsk and Luhansk People\u2019s Republics.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Ukraine",
                "refs": [
                    "http://www.welivesecurity.com/2016/05/18/groundbait"
                ]
            },
            "uuid": "8ed5e3f0-ed30-4eb8-bbee-4e221bd76d73",
            "value": "Groundbait",
            "aptmap": {
                "operatingFrom": "UKR",
                "victims": []
            }
        },
        {
            "description": "Longhorn has been active since at least 2011. It has used a range of back door Trojans in addition to zero-day vulnerabilities to compromise its targets. Longhorn has infiltrated governments and internationally operating organizations, in addition to targets in the financial, telecoms, energy, aerospace, information technology, education, and natural resources sectors. All of the organizations targeted would be of interest to a nation-state attacker.  Longhorn has infected 40 targets in at least 16 countries across the Middle East, Europe, Asia, and Africa. On one occasion a computer in the United States was compromised but, following infection, an uninstaller was launched within hours, which may indicate this victim was infected unintentionally. According to cfr, this threat actor compromises governments, international organizations, academic institutions, and financial, telecommunications, energy, aerospace, information technology, and natural resource  industries for espionage purposes. Some of the tools used by this threat actor were released by Wikileaks under the name \"Vault 7.\"",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "United States",
                "cfr-suspected-victims": [
                    "Global"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "United States of America",
                "refs": [
                    "https://www.symantec.com/connect/blogs/longhorn-tools-used-cyberespionage-group-linked-vault-7",
                    "https://www.bleepingcomputer.com/news/security/longhorn-cyber-espionage-group-is-actually-the-cia/",
                    "https://www.cfr.org/interactive/cyber-operations/longhorn"
                ],
                "synonyms": [
                    "Lamberts",
                    "the Lamberts"
                ]
            },
            "related": [
                {
                    "dest-uuid": "7036fb3d-86b7-4d9c-bc66-1e1ead8b7840",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "2f3311cd-8476-4be7-9005-ead920afc781",
            "value": "Longhorn",
            "aptmap": {
                "operatingFrom": "USA",
                "victims": []
            }
        },
        {
            "description": "The Callisto Group is an advanced threat actor whose known targets include military personnel, government officials, think tanks, and journalists in Europe and the South Caucasus. Their primary interest appears to be gathering intelligence related to foreign and security policy in the Eastern Europe and South Caucasus regions.",
            "meta": {
                "refs": [
                    "https://www.f-secure.com/documents/996508/1030745/callisto-group"
                ]
            },
            "uuid": "fbd279ab-c095-48dc-ba48-4bece3dd5b0f",
            "value": "Callisto",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Cyber espionage actors, now designated by FireEye as APT32 (OceanLotus Group), are carrying out intrusions into private sector companies across multiple industries and have also targeted foreign governments, dissidents, and journalists. FireEye assesses that APT32 leverages a unique suite of fully-featured malware, in conjunction with commercially-available tools, to conduct targeted operations that are aligned with Vietnamese state interests.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Vietnam",
                "cfr-suspected-victims": [
                    "China",
                    "Germany",
                    "United States",
                    "Vietnam",
                    "Philippines",
                    "Association of Southeast Asian Nations"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Viet Nam",
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html",
                    "https://www.cybereason.com/labs-operation-cobalt-kitty-a-large-scale-apt-in-asia-carried-out-by-the-oceanlotus-group/",
                    "https://www.scmagazineuk.com/ocean-lotus-groupapt-32-identified-as-vietnamese-apt-group/article/663565/",
                    "https://www.brighttalk.com/webcast/10703/261205",
                    "https://github.com/eset/malware-research/tree/master/oceanlotus",
                    "https://www.cfr.org/interactive/cyber-operations/ocean-lotus"
                ],
                "synonyms": [
                    "OceanLotus Group",
                    "Ocean Lotus",
                    "OceanLotus",
                    "Cobalt Kitty",
                    "APT-C-00",
                    "SeaLotus",
                    "Sea Lotus",
                    "APT-32",
                    "APT 32",
                    "Ocean Buffalo"
                ]
            },
            "related": [
                {
                    "dest-uuid": "247cb30b-955f-42eb-97a5-a89fef69341e",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "7e5a571f-dee2-4cae-a960-f8ab8a8fb1cf",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "aa29ae56-e54b-47a2-ad16-d3ab0242d5d7",
            "value": "APT32",
            "aptmap": {
                "operatingFrom": "VNM",
                "victims": [
                    "CHN",
                    "DEU",
                    "USA",
                    "VNM",
                    "PHL",
                    "IDN"
                ]
            }
        },
        {
            "description": "As these tools rise and fall in popularity (and more importantly, as detection rates by antivirus vendors improve), SilverTerrier actors have consistently adopted new malware families and shifted to the latest packing tools available. ",
            "meta": {
                "attribution-confidence": "50",
                "country": "Nigeria",
                "refs": [
                    "https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/reports/Unit_42/silverterrier-next-evolution-in-nigerian-cybercrime.pdf"
                ]
            },
            "uuid": "acbfd9e4-f78c-4ae0-9b52-c35ed679e546",
            "value": "SilverTerrier",
            "aptmap": {
                "operatingFrom": "NGA",
                "victims": []
            }
        },
        {
            "description": "A corporate espionage group has compromised a string of major corporations over the past three years in order to steal confidential information and intellectual property. The gang, which Symantec calls Butterfly, is not-state sponsored, rather financially motivated. It has attacked multi-billion dollar companies operating in the internet, IT software, pharmaceutical, and commodities sectors. Twitter, Facebook, Apple, and Microsoft are among the companies who have publicly acknowledged attacks.",
            "meta": {
                "refs": [
                    "https://www.symantec.com/connect/blogs/butterfly-profiting-high-level-corporate-attacks",
                    "https://securelist.com/71275/wild-neutron-economic-espionage-threat-actor-returns-with-new-tricks/",
                    "https://research.kudelskisecurity.com/2015/11/05/sphinx-moth-expanding-our-knowledge-of-the-wild-neutron-morpho-apt/"
                ],
                "synonyms": [
                    "Butterfly",
                    "Morpho",
                    "Sphinx Moth"
                ]
            },
            "uuid": "e7df3572-0c96-4968-8e5a-803ef4219762",
            "value": "WildNeutron",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "PLATINUM has been targeting its victims since at least as early as 2009, and may have been active for several years prior. Its activities are distinctly different not only from those typically seen in untargeted attacks, but from many targeted attacks as well. A large share of targeted attacks can be characterized as opportunistic: the activity group changes its target profiles and attack geographies based on geopolitical seasons, and may attack institutions all over the world. Like many such groups, PLATINUM seeks to steal sensitive intellectual property related to government interests, but its range of preferred targets is consistently limited to specific governmental organizations, defense institutes, intelligence agencies, diplomatic institutions, and telecommunication providers in South and Southeast Asia. The group\u2019s persistent use of spear phishing tactics (phishing attempts aimed at specific individuals) and access to previously undiscovered zero-day exploits have made it a highly resilient threat.",
            "meta": {
                "refs": [
                    "http://download.microsoft.com/download/2/2/5/225BFE3E-E1DE-4F5B-A77B-71200928D209/Platinum%20feature%20article%20-%20Targeted%20attacks%20in%20South%20and%20Southeast%20Asia%20April%202016.pdf",
                    "https://blogs.technet.microsoft.com/mmpc/2016/04/26/digging-deep-for-platinum/"
                ],
                "synonyms": [
                    "TwoForOne"
                ]
            },
            "related": [
                {
                    "dest-uuid": "f9c06633-dcff-48a1-8588-759e7cec5694",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "154e97b5-47ef-415a-99a6-2157f1b50339",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "1fc5671f-5757-43bf-8d6d-a9a93b03713a",
            "value": "PLATINUM",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Adversaries abusing ICS (based on Dragos Inc adversary list). Dragos, Inc. tracks the adversary group behind CRASHOVERRIDE as ELECTRUM and assesses with high confidence through confidential sources that ELECTRUM has direct ties to the Sandworm team. Our intelligence ICS WorldView customers have received a comprehensive report and this industry report will not get into sensitive technical details but instead focus on information needed for defense and impact awareness.",
            "meta": {
                "capabilities": "CRASHOVERRIDE",
                "mode-of-operation": "Electric grid disruption and long-term persistence",
                "refs": [
                    "https://dragos.com/blog/crashoverride/CrashOverride-01.pdf",
                    "https://www.welivesecurity.com/wp-content/uploads/2017/06/Win32_Industroyer.pdf",
                    "https://dragos.com/media/2017-Review-Industrial-Control-System-Threats.pdf",
                    "https://dragos.com/adversaries.html"
                ],
                "since": "2016",
                "synonyms": [
                    "Sandworm"
                ],
                "victimology": "Ukraine, Electric Utilities"
            },
            "related": [
                {
                    "dest-uuid": "381fcf73-60f6-4ab2-9991-6af3cbc35192",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f512de42-f76b-40d2-9923-59e7dbdfec35",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b47250ec-2094-4d06-b658-11456e05fe89",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "feac86e4-6bb2-4ba0-ac99-806aeb0a776c",
            "value": "ELECTRUM",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Dragos has identified a new activity group targeting access operations in the electric utility sector. We call this activity group RASPITE.  Analysis of RASPITE tactics, techniques, and procedures (TTPs) indicate the group has been active in some form since early- to mid-2017. RASPITE targeting includes entities in the US, Middle East, Europe, and East Asia. Operations against electric utility organizations appear limited to the US at this time.  RASPITE leverages strategic website compromise to gain initial access to target networks. RASPITE uses the same methodology as DYMALLOY and ALLANITE in embedding a link to a resource to prompt an SMB connection, from which it harvests Windows credentials. The group then deploys install scripts for a malicious service to beacon back to RASPITE-controlled infrastructure, allowing the adversary to remotely access the victim machine.",
            "meta": {
                "refs": [
                    "https://dragos.com/blog/20180802Raspite.html",
                    "https://www.symantec.com/blogs/threat-intelligence/leafminer-espionage-middle-east"
                ],
                "since": "2017",
                "synonyms": [
                    "LeafMiner"
                ],
                "victimology": "Electric utility sector"
            },
            "uuid": "2c8994ba-367c-46f6-bfb0-390c8760dd9e",
            "value": "RASPITE",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "FIN8 is a financially motivated group targeting the retail, hospitality and entertainment industries. The actor had previously conducted several tailored spearphishing campaigns using the downloader PUNCHBUGGY and POS malware PUNCHTRACK.",
            "meta": {
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2016/05/windows-zero-day-payment-cards.html",
                    "https://www2.fireeye.com/WBNR-Know-Your-Enemy-UNC622-Spear-Phishing.html",
                    "https://www.root9b.com/sites/default/files/whitepapers/PoS%20Malware%20ShellTea%20PoSlurp.pdf",
                    "http://files.shareholder.com/downloads/AMDA-254Q5F/0x0x938351/665BA6A3-9573-486C-B96F-80FA35759E8C/FEYE_rpt-mtrends-2017_FINAL2.pdf",
                    "https://www.fireeye.com/blog/threat-research/2017/06/obfuscation-in-the-wild.html",
                    "https://attack.mitre.org/groups/G0061"
                ]
            },
            "related": [
                {
                    "dest-uuid": "fd19bd82-1b14-49a1-a176-6cdc46b8a826",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "a78ae9fe-71cd-4563-9213-7b6260bd9a73",
            "value": "FIN8",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "El Machete is one of these threats that was first publicly disclosed and named by Kaspersky here. We\u2019ve found that this group has continued to operate successfully, predominantly in Latin America, since 2014. All attackers simply moved to new C2 infrastructure, based largely around dynamic DNS domains, in addition to making minimal changes to the malware in order to evade signature-based detection.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "Venezuela",
                    "Russia",
                    "Cuba",
                    "China",
                    "Belgium",
                    "Ecuador",
                    "Brazil",
                    "Spain",
                    "Germany",
                    "France",
                    "Colombia",
                    "Peru",
                    "Sweden",
                    "United States",
                    "Malaysia"
                ],
                "cfr-target-category": [
                    "Military",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "refs": [
                    "https://securelist.com/el-machete/66108/",
                    "https://www.cylance.com/en_us/blog/el-machete-malware-attacks-cut-through-latam.html",
                    "https://www.cfr.org/interactive/cyber-operations/machete",
                    "https://threatvector.cylance.com/en_us/home/el-machete-malware-attacks-cut-through-latam.html"
                ],
                "synonyms": [
                    "Machete"
                ]
            },
            "uuid": "827c17e0-c3f5-4ad1-a4f4-30a40ed0a2d3",
            "value": "El Machete",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "VEN",
                    "RUS",
                    "CUB",
                    "CHN",
                    "BEL",
                    "ECU",
                    "BRA",
                    "ESP",
                    "DEU",
                    "FRA",
                    "COL",
                    "PER",
                    "SWE",
                    "USA",
                    "MYS"
                ]
            }
        },
        {
            "description": "A criminal group dubbed Cobalt is behind synchronized ATM heists that saw machines across Europe, CIS countries (including Russia), and Malaysia being raided simultaneously, in the span of a few hours. The group has been active since June 2016, and their latest attacks happened in July and August.",
            "meta": {
                "refs": [
                    "https://www.helpnetsecurity.com/2016/11/22/cobalt-hackers-synchronized-atm-heists/",
                    "https://www.bleepingcomputer.com/news/security/cobalt-hacking-group-tests-banks-in-russia-and-romania/",
                    "https://www.secureworks.com/blog/cybercriminals-increasingly-trying-to-ensnare-the-big-financial-fish",
                    "https://www.crowdstrike.com/blog/meet-crowdstrikes-adversary-of-the-month-for-september-cobalt-spider/",
                    "https://www.group-ib.com/blog/cobalt",
                    "https://www.reuters.com/article/us-taiwan-cyber-atms/taiwan-atm-heist-linked-to-european-hacking-spree-security-firm-idUSKBN14P0CX",
                    "https://www.proofpoint.com/us/threat-insight/post/microsoft-word-intruder-integrates-cve-2017-0199-utilized-cobalt-group-target",
                    "https://blog.trendmicro.com/trendlabs-security-intelligence/cobalt-spam-runs-use-macros-cve-2017-8759-exploit/",
                    "https://www.riskiq.com/blog/labs/cobalt-strike/",
                    "https://www.riskiq.com/blog/labs/cobalt-group-spear-phishing-russian-banks/",
                    "https://unit42.paloaltonetworks.com/unit42-new-techniques-uncover-attribute-cobalt-gang-commodity-builders-infrastructure-revealed/",
                    "https://www.europol.europa.eu/newsroom/news/mastermind-behind-eur-1-billion-cyber-bank-robbery-arrested-in-spain",
                    "https://www.computerweekly.com/news/252446153/Three-Carbanak-cyber-heist-gang-members-arrested",
                    "https://www.ptsecurity.com/upload/corporate/ww-en/analytics/Cobalt-2017-eng.pdf",
                    "https://attack.mitre.org/groups/G0080/"
                ],
                "synonyms": [
                    "Cobalt group",
                    "Cobalt Group",
                    "Cobalt gang",
                    "Cobalt Gang",
                    "GOLD KINGSWOOD",
                    "Cobalt Spider"
                ]
            },
            "uuid": "01967480-c49b-4d4a-a7fa-aef0eaf535fe",
            "value": "Cobalt",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://www.proofpoint.com/us/threat-insight/post/apt-targets-financial-analysts#.WS3IBVFV4no.twitter"
                ]
            },
            "related": [
                {
                    "dest-uuid": "62a64fd3-aaf7-4d09-a375-d6f8bb118481",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "c6472ae1-c6ad-4cf1-8d6e-8c94b94fe314",
            "value": "TA459",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation",
                "refs": [
                    "https://www.threatconnect.com/blog/russia-hacks-bellingcat-mh17-investigation/#.V-wnrubaeEU.twitter"
                ]
            },
            "uuid": "4d9f68ba-cb2b-40bf-ba4b-6a5a9f2e1cf8",
            "value": "Cyber Berkut",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://www.wsj.com/articles/chinas-secret-weapon-in-south-korea-missile-fight-hackers-1492766403?emailToken=JRrydPtyYnqTg9EyZsw31FwuZ7JNEOKCXF7LaW/HM1DLsjnUp6e6wLgph560pnmiTAN/5ssf7moyADPQj2p2Gc+YkL1yi0zhIiUM9M6aj1HTYQ==",
                    "https://arstechnica.com/information-technology/2017/04/researchers-claim-china-trying-to-hack-south-korea-missile-defense-efforts/"
                ]
            },
            "uuid": "0ab7c8de-fc23-4793-99aa-7ee336199e26",
            "value": "Tonto Team",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "https://securelist.com/analysis/publications/74828/cve-2015-2545-overview-of-current-threats/"
                ]
            },
            "uuid": "fb745fe1-5478-4d47-ad3d-7389fa4a6f77",
            "value": "Danti",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "We have observed one APT group, which we call APT5, particularly focused on telecommunications and technology companies. More than half of the organizations we have observed being targeted or breached by APT5 operate in these sectors. Several times, APT5 has targeted organizations and personnel based in Southeast Asia. APT5 has been active since at least 2007. It appears to be a large threat group that consists of several subgroups, often with distinct tactics and infrastructure. APT5 has targeted or breached organizations across multiple industries, but its focus appears to be on telecommunications and technology companies, especially information about satellite communications. \nAPT5 targeted the network of an electronics firm that sells products for both industrial and military applications. The group subsequently stole communications related to the firm\u2019s business relationship with a national military, including inventories and memoranda about specific products they provided. \nIn one case in late 2014, APT5 breached the network of an international telecommunications company. The group used malware with keylogging capabilities to monitor the computer of an executive who manages the company\u2019s relationships with other telecommunications companies",
            "meta": {
                "refs": [
                    "https://www.fireeye.com/current-threats/apt-groups.html",
                    "https://www.fireeye.com/content/dam/fireeye-www/current-threats/pdfs/rpt-southeast-asia-threat-landscape.pdf"
                ]
            },
            "uuid": "a47b79ae-7a0c-4308-9efc-294af19cc795",
            "value": "APT5",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.slideshare.net/CTruncer/ever-present-persistence-established-footholds-seen-in-the-wild"
                ],
                "synonyms": [
                    "APT22"
                ]
            },
            "uuid": "7a2457d6-148a-4ce1-9e79-aa43352ee842",
            "value": "APT 22",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "This threat actor targets organizations in the critical infrastructure, heavy industry, manufacturing, and international relations sectors for espionage purposes.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Japan",
                    "China",
                    "Korea (Republic of)",
                    "Russian Federation"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.symantec.com/connect/blogs/tick-cyberespionage-group-zeros-japan",
                    "https://www.secureworks.jp/resources/rp-bronze-butler",
                    "https://researchcenter.paloaltonetworks.com/2017/07/unit42-tick-group-continues-attacks/",
                    "http://blog.jpcert.or.jp/2017/08/detecting-datper-malware-from-proxy-logs.html",
                    "https://www.cfr.org/interactive/cyber-operations/bronze-butler",
                    "https://www.secureworks.com/research/bronze-butler-targets-japanese-businesses",
                    "https://blog.trendmicro.com/trendlabs-security-intelligence/redbaldknight-bronze-butler-daserf-backdoor-now-using-steganography/",
                    "https://attack.mitre.org/groups/G0060/"
                ],
                "synonyms": [
                    "Bronze Butler",
                    "RedBaldKnight"
                ]
            },
            "related": [
                {
                    "dest-uuid": "93f52415-0fe4-4d3d-896c-fc9b8e88ab90",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "add6554a-815a-4ac3-9b22-9337b9661ab8",
            "value": "Tick",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "JPN",
                    "CHN",
                    "PRK",
                    "RUS"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "synonyms": [
                    "APT26",
                    "Hippo Team",
                    "JerseyMikes",
                    "Turbine Panda"
                ]
            },
            "related": [
                {
                    "dest-uuid": "7a19ecb1-3c65-4de3-a230-993516aed6a6",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "fa80877c-f509-4daf-8b62-20aba1635f68",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "c097471c-2405-4393-b6d7-afbcb5f0cd11",
            "value": "APT 26",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://go.crowdstrike.com/rs/281-OBQ-266/images/ReportGlobalThreatIntelligence.pdf"
                ]
            },
            "uuid": "67adfa07-869f-4052-9d56-b88a51489902",
            "value": "Sabre Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.darkreading.com/attacks-and-breaches/crowdstrike-falcon-traces-attacks-back-to-hackers/d/d-id/1110402?"
                ]
            },
            "uuid": "06e89270-ca1b-4cd4-85f3-940d23c76766",
            "value": "Big Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://files.sans.org/summit/Threat_Hunting_Incident_Response_Summit_2016/PDFs/Detecting-and-Responding-to-Pandas-and-Bears-Christopher-Scott-CrowdStrike-and-Wendi-Whitmore-IBM.pdf"
                ]
            },
            "uuid": "5bc7382d-ddc6-46d3-96f5-1dbdadbd601c",
            "value": "Poisonous Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "https://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf"
                ]
            },
            "uuid": "7ad01582-d6a7-4a40-a0ee-7727e268cd15",
            "value": "Ghost Jackal",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Korea, Democratic People's Republic of",
                "refs": [
                    "https://www.isightpartners.com/2016/02/threatscape-media-highlights-update-week-of-february-17th/"
                ]
            },
            "uuid": "73c636ae-e55c-4167-bf40-315789698adb",
            "value": "TEMP.Hermit",
            "aptmap": {
                "operatingFrom": "PRK",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Myanmar",
                    "Germany",
                    "Singapore",
                    "Canada",
                    "India",
                    "United States",
                    "South Korea"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://blog.fox-it.com/2016/06/15/mofang-a-politically-motivated-information-stealing-adversary/",
                    "https://www.threatconnect.com/china-superman-apt/",
                    "https://www.cfr.org/interactive/cyber-operations/mofang"
                ],
                "synonyms": [
                    "Superman"
                ]
            },
            "uuid": "999f3008-2b2f-467d-ab4d-c5a2fd80b344",
            "value": "Mofang",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "MMR",
                    "DEU",
                    "SGP",
                    "CAN",
                    "IND",
                    "USA",
                    "KOR"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Israel",
                    "Jordan",
                    "Saudi Arabia",
                    "Germany",
                    "United States"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://s3-eu-west-1.amazonaws.com/minervaresearchpublic/CopyKittens/CopyKittens.pdf",
                    "https://blog.domaintools.com/2017/03/hunt-case-study-hunting-campaign-indicators-on-privacy-protected-attack-infrastructure/",
                    "http://www.clearskysec.com/copykitten-jpost/",
                    "http://www.clearskysec.com/tulip/",
                    "https://www.cfr.org/interactive/cyber-operations/copykittens",
                    "https://www.clearskysec.com/wp-content/uploads/2017/07/Operation_Wilted_Tulip.pdf",
                    "https://attack.mitre.org/groups/G0052/"
                ],
                "synonyms": [
                    "Slayer Kitten"
                ]
            },
            "related": [
                {
                    "dest-uuid": "dcd81c6e-ebf7-4a16-93e0-9a97fa49c88a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "8cca9a1d-66e4-4bc4-ad49-95f759f4c1ae",
            "value": "CopyKittens",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "ISR",
                    "JOR",
                    "SAU",
                    "DEU",
                    "USA"
                ]
            }
        },
        {
            "meta": {
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2015/12/the-eps-awakens-part-two.html"
                ]
            },
            "uuid": "9035bfbf-a73f-4948-9df2-bd893e9cafef",
            "value": "EvilPost",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "The referenced link links this group to Temper Panda",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://securelist.com/analysis/publications/74828/cve-2015-2545-overview-of-current-threats/"
                ]
            },
            "uuid": "70b80bcc-58e3-4a09-a3bf-98c0412bb7d3",
            "value": "SVCMONDR",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.slideshare.net/CrowdStrike/crowd-casts-monthly-you-have-an-adversary-problem"
                ]
            },
            "uuid": "cd6ac640-9ae9-4aa9-89cd-89b95be1a3ab",
            "value": "Test Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Iran",
                    "Pakistan",
                    "Israel",
                    "United States"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://securelist.com/blog/incidents/33693/the-madi-campaign-part-i-5/",
                    "https://securelist.com/blog/incidents/33701/the-madi-campaign-part-ii-53/",
                    "https://www.cfr.org/interactive/cyber-operations/madi"
                ]
            },
            "uuid": "d5dacda0-12c2-4e80-bdf2-1c5019ec40e2",
            "value": "Madi",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "IRN",
                    "PAK",
                    "ISR",
                    "USA"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.slideshare.net/CrowdStrike/crowd-casts-monthly-you-have-an-adversary-problem"
                ]
            },
            "uuid": "69059ec9-45c9-4961-a07e-6b2f2228f0ce",
            "value": "Electric Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "United Kingdom",
                    "Hong Kong"
                ],
                "cfr-target-category": [
                    "Private sector",
                    "Military"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.alienvault.com/open-threat-exchange/blog/new-sykipot-developments",
                    "http://blog.trendmicro.com/trendlabs-security-intelligence/sykipot-now-targeting-us-civil-aviation-sector-information/",
                    "https://www.sans.org/reading-room/whitepapers/malicious/detailed-analysis-sykipot-smartcard-proxy-variant-33919",
                    "https://www.cfr.org/interactive/cyber-operations/sykipot"
                ],
                "synonyms": [
                    "PLA Navy",
                    "Sykipot"
                ]
            },
            "related": [
                {
                    "dest-uuid": "38fd6a28-3353-4f2b-bb2b-459fecd5c648",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "9a683d9c-8f7d-43df-bba2-ad0ca71e277c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "2fb07fa4-0d7f-43c7-8ff4-b28404313fe7",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "8e28dbee-4e9e-4491-9a6c-ee9c9ec4b28b",
            "value": "Maverick Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "GBR",
                    "HKG"
                ]
            }
        },
        {
            "description": "This threat actor targets South Korean think tanks, industry, nuclear power operators, and the Ministry of Unification for espionage purposes.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Korea (Democratic People's Republic of)",
                "cfr-suspected-victims": [
                    "Ministry of Unification",
                    "Sejong Institute",
                    "Korea Institute for Defense Analyses"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Korea, Democratic People's Republic of",
                "refs": [
                    "http://securelist.com/analysis/57915/the-kimsuky-operation-a-north-korean-apt/",
                    "https://www.cfr.org/interactive/cyber-operations/kimsuky"
                ],
                "synonyms": [
                    "Kimsuky",
                    "Velvet Chollima"
                ]
            },
            "uuid": "bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
            "value": "Kimsuki",
            "aptmap": {
                "operatingFrom": "PRK",
                "victims": [
                    "KOR",
                    "KOR",
                    "PRK"
                ]
            }
        },
        {
            "meta": {
                "refs": [
                    "https://www.cylance.com/en_us/blog/the-deception-project-a-new-japanese-centric-threat.html"
                ]
            },
            "uuid": "7b6ba207-94de-4f94-bc7f-52cd0dafade5",
            "value": "Snake Wine",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "This threat actor targets governments, diplomatic missions, private companies in the energy sector, and academics for espionage purposes.\nThe Mask is an advanced threat actor that has been involved in cyber-espionage operations since at least 2007. The name \"Mask\" comes from the Spanish slang word \"Careto\" (\"Ugly Face\" or \u201cMask\u201d) which the authors included in some of the malware modules.\n More than 380 unique victims in 31 countries have been observed to date.What makes \u201cThe Mask\u201d special is the complexity of the toolset used by the attackers. This includes an extremely sophisticated malware, a rootkit, a bootkit, 32-and 64-bit Windows versions, Mac OS X and Linux versions and possibly versions for Android and iPad/iPhone (Apple iOS).",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Spain",
                "cfr-suspected-victims": [
                    "Morocco",
                    "France",
                    "Libya",
                    "Venezuela",
                    "Poland",
                    "Brazil",
                    "Spain",
                    "United States",
                    "South Africa",
                    "Tunisia",
                    "United Kingdom",
                    "Switzerland",
                    "Iran",
                    "Germany"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Spain",
                "refs": [
                    "https://securelist.com/the-caretomask-apt-frequently-asked-questions/58254/",
                    "https://www.cfr.org/interactive/cyber-operations/careto",
                    "https://d2538mqrb7brka.cloudfront.net/wp-content/uploads/sites/43/2018/03/20133638/unveilingthemask_v1.0.pdf"
                ],
                "synonyms": [
                    "The Mask",
                    "Mask",
                    "Ugly Face"
                ]
            },
            "uuid": "069ba781-b2d9-4403-9d9d-c599f5e0181d",
            "value": "Careto",
            "aptmap": {
                "operatingFrom": "ESP",
                "victims": [
                    "MAR",
                    "FRA",
                    "LBY",
                    "VEN",
                    "POL",
                    "BRA",
                    "ESP",
                    "USA",
                    "ZAF",
                    "TUN",
                    "GBR",
                    "CHE",
                    "IRN",
                    "DEU"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://www.slideshare.net/CrowdStrike/crowd-casts-monthly-you-have-an-adversary-problem"
                ]
            },
            "uuid": "b07cf296-7ab9-4b85-a07e-421607c212b0",
            "value": "Gibberish Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "This threat actor targets the South Korean government, transportation, and energy sectors.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "South Korea"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Korea, Democratic People's Republic of",
                "refs": [
                    "http://news.softpedia.com/news/korean-energy-and-transportation-targets-attacked-by-oniondog-apt-501534.shtml",
                    "https://www.cfr.org/interactive/cyber-operations/onion-dog"
                ]
            },
            "uuid": "5898e11e-a023-464d-975c-b36fb1639e69",
            "value": "OnionDog",
            "aptmap": {
                "operatingFrom": "PRK",
                "victims": [
                    "KOR"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "http://www.crowdstrike.com/blog/whois-clever-kitten/"
                ],
                "synonyms": [
                    "Group 41"
                ]
            },
            "related": [
                {
                    "dest-uuid": "8f5e8dc7-739d-4f5e-a8a1-a66e004d7063",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "11e17436-6ede-4733-8547-4ce0254ea19e",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "86724806-7ec9-4a48-a0a7-ecbde3bf4810",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f9d6633a-55e6-4adc-9263-6ae080421a13",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "ba724df5-9aa0-45ca-8e0e-7101c208ae48",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f98bac6b-12fd-4cad-be84-c84666932232",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f873db71-3d53-41d5-b141-530675ade27a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "d56c99fa-4710-472c-81a6-41b7a84ea4be",
            "value": "Clever Kitten",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "https://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf"
                ]
            },
            "uuid": "e85ab78c-5e86-403c-b444-9cdcc167fb77",
            "value": "Andromeda Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "https://en.wikipedia.org/wiki/Islamic_State_Hacking_Division",
                    "https://ent.siteintelgroup.com/index.php?option=com_customproperties&view=search&task=tag&bind_to_category=content:37&tagId=697"
                ],
                "synonyms": [
                    "Islamic State Hacking Division",
                    "CCA",
                    "United Cyber Caliphate",
                    "UUC",
                    "CyberCaliphate"
                ]
            },
            "uuid": "76f6ad4e-2ff3-4ccb-b81d-18162f290af0",
            "value": "Cyber Caliphate Army",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Russian Federation",
                "refs": [
                    "http://go.crowdstrike.com/rs/281-OBQ-266/images/ReportGlobalThreatIntelligence.pdf"
                ]
            },
            "uuid": "430ba885-cd24-492e-804c-815176ed9b1e",
            "value": "Magnetic Spider",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": []
            }
        },
        {
            "description": "Arbor\u2019s ASERT team is now reporting that, after looking deeper at that particular campaign, and by exposing a new trail in the group\u2019s activities, they managed to identify a new RAT that was undetectable at that time by most antivirus vendors.\nNamed Trochilus, this new RAT was part of Group 27\u2019s malware portfolio that included six other malware strains, all served together or in different combinations, based on the data that needed to be stolen from each victim.\nThis collection of malware, dubbed the Seven Pointed Dagger by ASERT experts, included two different PlugX versions, two different Trochilus RAT versions, one version of the 3012 variant of the 9002 RAT, one EvilGrab RAT version, and one unknown piece of malware, which the team has not entirely decloaked just yet.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://www.arbornetworks.com/blog/asert/wp-content/uploads/2016/01/ASERT-Threat-Intelligence-Brief-2015-08-Uncovering-the-Seven-Pointed-Dagger.pdf",
                    "https://news.softpedia.com/news/trochilus-rat-evades-antivirus-detection-used-for-cyber-espionage-in-south-east-asia-498776.shtml",
                    "https://unit42.paloaltonetworks.com/unit42-trochilus-rat-new-moonwind-rat-used-attack-thai-utility-organizations/"
                ]
            },
            "uuid": "73e4728a-955e-426a-b144-8cb95131f2ca",
            "value": "Group 27",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "https://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf"
                ]
            },
            "uuid": "769bf551-ff39-4f84-b7f2-654a28df1e50",
            "value": "Singing Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "http://pastebin.com/u/QassamCyberFighters",
                    "http://ddanchev.blogspot.com.es/2012/09/dissecting-operation-ababil-osint.html"
                ],
                "synonyms": [
                    "Fraternal Jackal"
                ]
            },
            "uuid": "22c2b363-5d8f-4b04-96db-1b6cf4d7e8db",
            "value": "Cyber fighters of Izz Ad-Din Al Qassam",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "The FBI issued a rare bulletin admitting that a group named Advanced Persistent Threat 6 (APT6) hacked into US government computer systems as far back as 2011 and for years stole sensitive data.\nThe FBI alert was issued in February and went largely unnoticed. Nearly a month later, security experts are now shining a bright light on the alert and the mysterious group behind the attack.\n\u201cThis is a rare alert and a little late, but one that is welcomed by all security vendors as it offers a chance to mitigate their customers and also collaborate further in what appears to be an ongoing FBI investigation,\u201d said Deepen Desai, director of security research at the security firm Zscaler in an email to Threatpost.\nDetails regarding the actual attack and what government systems were infected are scant. Government officials said they knew the initial attack occurred in 2011, but are unaware of who specifically is behind the attacks.\n\u201cGiven the nature of malware payload involved and the duration of this compromise being unnoticed \u2013 the scope of lateral movement inside the compromised network is very high possibly exposing all the critical systems,\u201dDeepen said.",
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://threatpost.com/fbi-quietly-admits-to-multi-year-apt-attack-sensitive-data-stolen/117267/"
                ],
                "synonyms": [
                    "1.php Group",
                    "APT6"
                ]
            },
            "uuid": "1a2592a3-eab7-417c-bf2d-9c0558c2b3e7",
            "value": "APT 6",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "http://www.trendmicro.com/cloud-content/us/pdfs/security-intelligence/white-papers/wp-operation-arid-viper.pdf",
                    "http://securityaffairs.co/wordpress/33785/cyber-crime/arid-viper-israel-sex-video.html",
                    "https://securelist.com/blog/research/68817/the-desert-falcons-targeted-attacks/",
                    "https://ti.360.com/upload/report/file/APTSWXLVJ8fnjoxck.pdf",
                    "https://blog.lookout.com/blog/2017/02/16/viperrat-mobile-apt/",
                    "https://securelist.com/blog/incidents/77562/breaking-the-weakest-link-of-the-strongest-chain/",
                    "https://www.proofpoint.com/us/threat-insight/post/Operation-Arid-Viper-Slithers-Back-Into-View",
                    "https://www.ci-project.org/blog/2017/3/4/arid-viper",
                    "http://blog.talosintelligence.com/2017/06/palestine-delphi.html",
                    "https://www.threatconnect.com/blog/kasperagent-malware-campaign/",
                    "https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/sexually-explicit-material-used-as-lures-in-cyber-attacks?linkId=12425812",
                    "<https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064309/The-Desert-Falcons-targeted-attacks.pdf"
                ],
                "synonyms": [
                    "Desert Falcon",
                    "Arid Viper",
                    "APT-C-23"
                ]
            },
            "uuid": "0cfff0f4-868c-40a1-b9b4-0d153c0b33b6",
            "value": "AridViper",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "https://www.rsaconference.com/writable/presentations/file_upload/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries_final.pdf"
                ]
            },
            "uuid": "445c7b62-028b-455e-9d65-74899b7006a4",
            "value": "Dextorous Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Israel",
                "cfr-suspected-victims": [
                    "Iran",
                    "Sudan"
                ],
                "cfr-target-category": [
                    "Military",
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Israel",
                "refs": [
                    "https://securelist.com/blog/research/70504/the-mystery-of-duqu-2-0-a-sophisticated-cyberespionage-actor-returns/",
                    "https://archive.org/details/Stuxnet",
                    "https://www.cfr.org/interactive/cyber-operations/duqu",
                    "https://www.cfr.org/interactive/cyber-operations/duqu-20"
                ],
                "synonyms": [
                    "Duqu Group"
                ]
            },
            "uuid": "e9a6cbd7-ca27-4894-ae20-9d11c06fdc02",
            "value": "Unit 8200",
            "aptmap": {
                "operatingFrom": "ISR",
                "victims": [
                    "IRN",
                    "SDN"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "United States",
                    "South Korea",
                    "United Kingdom",
                    "Uzbekistan"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "https://securelist.com/introducing-whitebear/81638/",
                    "https://www.cfr.org/interactive/cyber-operations/whitebears"
                ],
                "synonyms": [
                    "Skipper Turla"
                ]
            },
            "uuid": "dc6c6cbc-9dc6-4ace-a2d2-fadefe45cce6",
            "value": "White Bear",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "USA",
                    "KOR",
                    "GBR",
                    "UZB"
                ]
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "http://go.crowdstrike.com/rs/281-OBQ-266/images/ReportGlobalThreatIntelligence.pdf"
                ]
            },
            "uuid": "43992f81-fd29-4228-94e0-c3aa3e65aab7",
            "value": "Pale Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "meta": {
                "attribution-confidence": "50",
                "country": "China",
                "refs": [
                    "https://www.isightpartners.com/2016/02/threatscape-media-highlights-update-week-of-february-17th/"
                ]
            },
            "uuid": "110792e8-38d2-4df2-9ea3-08b60321e994",
            "value": "Mana Team",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "Sowbug has been conducting highly targeted cyber attacks against organizations in South America and Southeast Asia and appears to be heavily focused on foreign policy institutions and diplomatic targets. Sowbug has been seen mounting classic espionage attacks by stealing documents from the organizations it infiltrates. ",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "Argentina",
                    "Ecuador",
                    "Brazil",
                    "Brunei",
                    "Peru",
                    "Malaysia"
                ],
                "cfr-target-category": [
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "refs": [
                    "https://www.symantec.com/connect/blogs/sowbug-cyber-espionage-group-targets-south-american-and-southeast-asian-governments",
                    "https://www.cfr.org/interactive/cyber-operations/sowbug"
                ]
            },
            "related": [
                {
                    "dest-uuid": "d1acfbb3-647b-4723-9154-800ec119006e",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "1ca3b039-404e-4132-88c2-4e41235cd2f5",
            "value": "Sowbug",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "ARG",
                    "ECU",
                    "BRA",
                    "BRN",
                    "PER",
                    "MYS"
                ]
            }
        },
        {
            "description": "The MuddyWater attacks are primarily against Middle Eastern nations. However, we have also observed attacks against surrounding nations and beyond, including targets in India and the USA. MuddyWater attacks are characterized by the use of a slowly evolving PowerShell-based first stage backdoor we call \u201cPOWERSTATS\u201d. Despite broad scrutiny and reports on MuddyWater attacks, the activity continues with only incremental changes to the tools and techniques.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Saudi Arabia",
                    "Georgia",
                    "Turkey",
                    "Iraq",
                    "Israel",
                    "India",
                    "United Arab Emirates",
                    "Pakistan",
                    "United States"
                ],
                "cfr-target-category": [
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://researchcenter.paloaltonetworks.com/2017/11/unit42-muddying-the-water-targeted-attacks-in-the-middle-east/",
                    "https://www.cfr.org/interactive/cyber-operations/muddywater"
                ],
                "synonyms": [
                    "TEMP.Zagros",
                    "Static Kitten"
                ]
            },
            "related": [
                {
                    "dest-uuid": "269e8108-68c6-4f99-b911-14b2e765dec2",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "a29af069-03c3-4534-b78b-7d1a77ea085b",
            "value": "MuddyWater",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "SAU",
                    "GEO",
                    "TUR",
                    "IRQ",
                    "ISR",
                    "IND",
                    "ARE",
                    "PAK",
                    "USA"
                ]
            }
        },
        {
            "description": "In less than two years, this group has conducted over 20 successful attacks on financial institutions and legal firms in the USA, UK and Russia. The group has primarily been targeting card processing systems, including the AWS CBR (Russian Interbank System) and purportedly SWIFT (US). Given the wide usage of STAR in LATAM, financial institutions in LATAM could have particular exposure to a potential interest from the MoneyTaker group.",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/moneytaker-hacker-group-steals-millions-from-us-and-russian-banks/",
                    "https://www.group-ib.com/resources/reports/money-taker.html",
                    "https://www.group-ib.com/blog/moneytaker"
                ]
            },
            "uuid": "7d78ec00-dfdc-4a80-a4da-63f1ae63bd7f",
            "value": "MoneyTaker",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "We\u2019re already used to the fact that complex cyberattacks use 0-day vulnerabilities, bypassing digital signature checks, virtual file systems, non-standard encryption algorithms and other tricks. Sometimes, however, all of this may be done in much simpler ways, as was the case in the malicious campaign that we detected a while ago \u2013 we named it \u2018Microcin\u2019 after microini, one of the malicious components used in it.",
            "meta": {
                "refs": [
                    "https://securelist.com/a-simple-example-of-a-complex-cyberattack/82636/",
                    "https://cdn.securelist.com/files/2017/09/Microcin_Technical_4PDF_eng_final_s.pdf"
                ]
            },
            "uuid": "0a6b31cd-54cd-4f82-9b87-aab780604632",
            "value": "Microcin",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Lookout and Electronic Frontier Foundation (EFF) have discovered Dark Caracal, a persistent and prolific actor, who at the time of writing is believed to be administered out of a building belonging to the Lebanese General Security Directorate in Beirut. At present, we have knowledge of hundreds of gigabytes of exfiltrated data, in 21+ countries, across thousands of victims. Stolen data includes enterprise intellectual property and personally identifiable information.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Lebanon",
                "refs": [
                    "https://info.lookout.com/rs/051-ESQ-475/images/Lookout_Dark-Caracal_srr_20180118_us_v.1.0.pdf",
                    "https://attack.mitre.org/groups/G0070/"
                ]
            },
            "uuid": "3d449c83-4426-431a-b06a-cb4f8a0fca94",
            "value": "Dark Caracal",
            "aptmap": {
                "operatingFrom": "LBN",
                "victims": []
            }
        },
        {
            "description": "Nexus Zeta is no stranger when it comes to implementing SOAP related exploits. The threat actor has already been observed in implementing two other known SOAP related exploits, CVE-2014\u20138361 and CVE-2017\u201317215 in his Satori botnet project. A third SOAP exploit, TR-069 bug has also been observed previously in IoT botnets. This makes EDB 38722 the fourth SOAP related exploit which is discovered in the wild by IoT botnets.",
            "meta": {
                "refs": [
                    "https://blog.newskysecurity.com/masuta-satori-creators-second-botnet-weaponizes-a-new-router-exploit-2ddc51cc52a7"
                ]
            },
            "uuid": "8c21ce09-33c3-412c-bb55-323765e89a60",
            "value": "Nexus Zeta",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "APT37 has likely been active since at least 2012 and focuses on targeting the public and private sectors primarily in South Korea. In 2017, APT37 expanded its targeting beyond the Korean peninsula to include Japan, Vietnam and the Middle East, and to a wider range of industry verticals, including chemicals, electronics, manufacturing, aerospace, automotive and healthcare entities",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Korea (Democratic People's Republic of)",
                "cfr-suspected-victims": [
                    "Republic of Korea",
                    "Japan",
                    "Vietnam"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "country": "Korea, Democratic People's Republic of",
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2018/02/apt37-overlooked-north-korean-actor.html",
                    "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf",
                    "http://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html",
                    "https://twitter.com/mstoned7/status/966126706107953152",
                    "https://www.cfr.org/interactive/cyber-operations/apt-37",
                    "https://www.bleepingcomputer.com/news/security/report-ties-north-korean-attacks-to-new-malware-linked-by-word-macros/"
                ],
                "synonyms": [
                    "APT 37",
                    "Group 123",
                    "Group123",
                    "Starcruft",
                    "Reaper",
                    "Reaper Group",
                    "Red Eyes",
                    "Ricochet Chollima",
                    "StarCruft",
                    "Operation Daybreak",
                    "Operation Erebus."
                ]
            },
            "related": [
                {
                    "dest-uuid": "4a2ce82e-1a74-468a-a6fb-bbead541383c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "bb446dc2-4fee-4212-8b2c-3ffa2917e338",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "50cd027f-df14-40b2-aa22-bf5de5061163",
            "value": "APT37",
            "aptmap": {
                "operatingFrom": "PRK",
                "victims": [
                    "PRK",
                    "JPN",
                    "VNM"
                ]
            }
        },
        {
            "description": "Leviathan is an espionage actor targeting organizations and high-value targets in defense and government. Active since at least 2014, this actor has long-standing interest in maritime industries, naval defense contractors, and associated research institutions in the United States and Western Europe.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "Hong Kong",
                    "The Philippines",
                    "Asia Pacific Economic Cooperation"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.proofpoint.com/us/threat-insight/post/leviathan-espionage-actor-spearphishes-maritime-and-defense-targets",
                    "https://www.fireeye.com/blog/threat-research/2018/03/suspected-chinese-espionage-group-targeting-maritime-and-engineering-industries.html",
                    "https://www.cfr.org/interactive/cyber-operations/leviathan",
                    "https://www.fireeye.com/blog/threat-research/2019/03/apt40-examining-a-china-nexus-espionage-actor.html"
                ],
                "synonyms": [
                    "TEMP.Periscope",
                    "TEMP.Jumper",
                    "APT 40",
                    "APT40",
                    "BRONZE MOHAWK"
                ]
            },
            "related": [
                {
                    "dest-uuid": "7113eaa5-ba79-4fb3-b68a-398ee9cd698e",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "5b4b6980-3bc7-11e8-84d6-879aaac37dd9",
            "value": "Leviathan",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "HKG",
                    "PHL",
                    "SGP"
                ]
            }
        },
        {
            "description": "Since at least 2014, an Iranian threat group tracked by FireEye as APT34 has conducted reconnaissance aligned with the strategic interests of Iran. The group conducts operations primarily in the Middle East, targeting financial, government, energy, chemical, telecommunications and other industries. Repeated targeting of Middle Eastern financial, energy and government organizations leads FireEye to assess that those sectors are a primary concern of APT34. The use of infrastructure tied to Iranian operations, timing and alignment with the national interests of Iran also lead FireEye to assess that APT34 acts on behalf of the Iranian government.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "Middle East"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.fireeye.com/content/dam/collateral/en/mtrends-2018.pdf",
                    "https://www.wired.com/story/apt-34-iranian-hackers-critical-infrastructure-companies/  ",
                    "https://www.fireeye.com/blog/threat-research/2017/12/targeted-attack-in-middle-east-by-apt34.html",
                    "https://www.cfr.org/interactive/cyber-operations/apt-34"
                ],
                "synonyms": [
                    "APT 34"
                ]
            },
            "related": [
                {
                    "dest-uuid": "68ba94ab-78b8-43e7-83e2-aed3466882c6",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "73a521f6-3bc7-11e8-9e30-df7c90e50dda",
            "value": "APT34",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "FireEye has identified APT35 operations dating back to 2014. APT35, also known as the Newscaster Team, is a threat group sponsored by the Iranian government that conducts long term, resource-intensive operations to collect strategic intelligence. APT35 typically targets U.S. and the Middle Eastern military, diplomatic and government personnel, organizations in the media, energy and defense industrial base (DIB), and engineering, business services and telecommunications sectors.",
            "meta": {
                "attribution-confidence": "50",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://www.fireeye.com/content/dam/collateral/en/mtrends-2018.pdf"
                ],
                "synonyms": [
                    "APT 35",
                    "Newscaster Team"
                ]
            },
            "uuid": "b8967b3c-3bc9-11e8-8701-8b1ead8c099e",
            "value": "APT35",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "Symantec has identified a previously unknown group called Orangeworm that has been observed installing a custom backdoor called Trojan.Kwampirs within large international corporations that operate within the healthcare sector in the United States, Europe, and Asia.\nFirst identified in January 2015, Orangeworm has also conducted targeted attacks against organizations in related industries as part of a larger supply-chain attack in order to reach their intended victims. Known victims include healthcare providers, pharmaceuticals, IT solution providers for healthcare and equipment manufacturers that serve the healthcare industry, likely for the purpose of corporate espionage.",
            "meta": {
                "refs": [
                    "https://www.symantec.com/blogs/threat-intelligence/orangeworm-targets-healthcare-us-europe-asia"
                ]
            },
            "uuid": "35d71626-4794-11e8-b74d-bbcbe48fee3c",
            "value": "Orangeworm",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Adversaries abusing ICS (based on Dragos Inc adversary list).\nALLANITE accesses business and industrial control (ICS) networks, conducts reconnaissance, and gathers intelligence in United States and United Kingdom electric utility sectors. Dragos assesses with moderate confidence that ALLANITE operators continue to maintain ICS network access to: (1) understand the operational environment necessary to develop disruptive capabilities, (2) have ready access from which to disrupt electric utilities.\nALLANITE uses email phishing campaigns and compromised websites called watering holes to steal credentials and gain access to target networks, including collecting and distributing screenshots of industrial control systems. ALLANITE operations limit themselves to information gathering and have not demonstrated any disruptive or damaging capabilities.\nALLANITE conducts malware-less operations primarily leveraging legitimate and available tools in the Windows operating system.",
            "meta": {
                "capabilities": "Powershell scripts, THC Hydra, SecretsDump, Inveigh, PSExec",
                "mode-of-operation": "Watering-hole and phishing leading to ICS recon and screenshot collection",
                "refs": [
                    "https://dragos.com/adversaries.html",
                    "https://dragos.com/blog/20180510Allanite.html"
                ],
                "since": "2017",
                "synonyms": [
                    "Palmetto Fusion",
                    "Allanite"
                ],
                "victimology": "Electric utilities, US and UK"
            },
            "uuid": "a9000eaf-2b75-4ec7-8dcf-fe1bb5c77470",
            "value": "ALLANITE",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Adversaries abusing ICS (based on Dragos Inc adversary list).\nThis threat actor targets organizations involved in oil, gas, and electricity production, primarily in the Gulf region, for espionage purposes. According to one cybersecurity company, the threat actor \u201ccompromises a target machine and passes it off to another threat actor for further exploitation.\u201d",
            "meta": {
                "attribution-confidence": "50",
                "capabilities": "Watering holes, 64-bit malware, covert C2 via IPv6 DNS, ISMDOOR",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "Iraq",
                    "United Kingdom",
                    "Pakistan",
                    "Israel"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "mode-of-operation": "IT compromise, information gathering and recon against industrial orgs",
                "refs": [
                    "https://dragos.com/adversaries.html",
                    "https://dragos.com/media/2017-Review-Industrial-Control-System-Threats.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/chrysene"
                ],
                "since": "2017",
                "synonyms": [
                    "OilRig",
                    "Greenbug"
                ],
                "victimology": "Oil and Gas, Manufacturing, Europe, MENA, North America"
            },
            "related": [
                {
                    "dest-uuid": "8f5e8dc7-739d-4f5e-a8a1-a66e004d7063",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "11e17436-6ede-4733-8547-4ce0254ea19e",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "86724806-7ec9-4a48-a0a7-ecbde3bf4810",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "d56c99fa-4710-472c-81a6-41b7a84ea4be",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "4ca1929c-7d64-4aab-b849-badbfc0c760d",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "b96e02f1-4037-463f-b158-5a964352f8d9",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f9d6633a-55e6-4adc-9263-6ae080421a13",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "ba724df5-9aa0-45ca-8e0e-7101c208ae48",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f98bac6b-12fd-4cad-be84-c84666932232",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f873db71-3d53-41d5-b141-530675ade27a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "47204403-34c9-4d25-a006-296a0939d1a2",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "a0082cfa-32e2-42b8-92d8-5c7a7409dcf1",
            "value": "CHRYSENE",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "IRQ",
                    "GBR",
                    "PAK",
                    "ISR"
                ]
            }
        },
        {
            "description": "Adversaries abusing ICS (based on Dragos Inc adversary list).\nThis threat actor compromises the networks of companies involved in electric power, specifically looking for intellectual property and information about the companies\u2019 operations.",
            "meta": {
                "attribution-confidence": "50",
                "capabilities": "Encoded binaries in documents, evasion techniques",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "United States"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "mode-of-operation": "IT compromise with hardened anti-analysis malware against industrial orgs",
                "refs": [
                    "https://dragos.com/adversaries.html",
                    "https://dragos.com/media/2017-Review-Industrial-Control-System-Threats.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/covellite"
                ],
                "since": "2017",
                "synonyms": [
                    "Lazarus",
                    "Hidden Cobra"
                ],
                "victimology": "Electric Utilities, US"
            },
            "related": [
                {
                    "dest-uuid": "c93fccb1-e8e8-42cf-ae33-2ad1d183913a",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "68391641-859f-4a9a-9a1e-3e5cf71ec376",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "027a1428-6e79-4a4b-82b9-e698e8525c2b",
            "value": "COVELLITE",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "USA"
                ]
            }
        },
        {
            "description": "Adversaries abusing ICS (based on Dragos Inc adversary list).\nThis threat actor targets industrial control systems in Turkey, Europe, and North America.\n    Believed to be linked to Crouching Yeti",
            "meta": {
                "attribution-confidence": "50",
                "capabilities": "GOODOR, DORSHEL, KARAGANY, Mimikatz",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "Turkey"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "mode-of-operation": "Deep ICS environment information gathering, operator credentials, industrial process details",
                "refs": [
                    "https://dragos.com/adversaries.html",
                    "https://dragos.com/media/2017-Review-Industrial-Control-System-Threats.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/dymalloy"
                ],
                "since": "2016",
                "synonyms": [
                    "Dragonfly 2.0",
                    "Dragonfly2",
                    "Berserker Bear"
                ],
                "victimology": "Turkey, Europe, US"
            },
            "uuid": "a08ab076-33c1-4350-b021-650c34277f2d",
            "value": "DYMALLOY",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "TUR"
                ]
            }
        },
        {
            "description": "Adversaries abusing ICS (based on Dragos Inc adversary list).",
            "meta": {
                "attribution-confidence": "50",
                "capabilities": "STONEDRILL wiper, variants of TURNEDUP malware",
                "cfr-suspected-state-sponsor": "Iran (Islamic Republic of)",
                "cfr-suspected-victims": [
                    "United States",
                    "Saudi Arabia",
                    "South Korea"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Iran, Islamic Republic of",
                "mode-of-operation": "IT network limited, information gathering against industrial orgs",
                "refs": [
                    "https://dragos.com/adversaries.html",
                    "https://dragos.com/media/2017-Review-Industrial-Control-System-Threats.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/apt-33"
                ],
                "since": "2016",
                "synonyms": [
                    "APT33"
                ],
                "victimology": "Petrochemical, Aerospace, Saudi Arabia"
            },
            "related": [
                {
                    "dest-uuid": "fbd29c89-18ba-4c2d-b792-51c0adee049f",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "accd848b-b8f4-46ba-a408-9063b35cfbf2",
            "value": "MAGNALLIUM",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": [
                    "USA",
                    "SAU",
                    "KOR"
                ]
            }
        },
        {
            "description": "Adversaries abusing ICS (based on Dragos Inc adversary list).",
            "meta": {
                "capabilities": "TRISIS, custom credential harvesting",
                "mode-of-operation": "Focused on physical destruction and long-term persistence",
                "refs": [
                    "https://dragos.com/adversaries.html"
                ],
                "since": "2014",
                "synonyms": [],
                "victimology": "Oil and Gas, Middle East"
            },
            "uuid": "3dddc77e-a52a-466a-bf1c-1463e352077f",
            "value": "XENOTIME",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "ZooPark is a cyberespionage operation that has been focusing on Middle Eastern targets since at least June 2015. The threat actors behind ZooPark infect Android devices using several generations of malware we label from v1-v4, with v4 being the most recent version deployed in 2017.",
            "meta": {
                "refs": [
                    "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/05/03095519/ZooPark_for_public_final.pdf"
                ]
            },
            "uuid": "4defbf2e-4f73-11e8-807f-578d61da7568",
            "value": "ZooPark",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Experts assigned the codename of LuckyMouse to the group behind this hack, but they later realized the attackers were an older Chinese threat actor known under various names in the reports of other cyber-security firms, such as Emissary Panda, APT27, Threat Group 3390, Bronze Union, ZipToken, and Iron Tiger",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "United States",
                    "Japan",
                    "Taiwan",
                    "India",
                    "Canada",
                    "China",
                    "Thailand",
                    "Israel",
                    "Australia",
                    "Republic of Korea",
                    "Russia",
                    "Iran"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/chinese-cyber-espionage-group-hacked-government-data-center/",
                    "https://www.secureworks.com/research/bronze-union",
                    "http://newsroom.trendmicro.com/blog/operation-iron-tiger-attackers-shift-east-asia-united-states",
                    "https://www.secureworks.com/research/threat-group-3390-targets-organizations-for-cyberespionage",
                    "https://www.threatconnect.com/blog/threatconnect-discovers-chinese-apt-activity-in-europe/",
                    "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2018/april/decoding-network-data-from-a-gh0st-rat-variant/",
                    "https://securelist.com/luckymouse-ndisproxy-driver/87914/",
                    "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/2015.09.17.Operation_Iron_Tiger/Operation%20Iron%20Tiger%20Appendix.pdf",
                    "https://www.cfr.org/interactive/cyber-operations/iron-tiger",
                    "https://arstechnica.com/information-technology/2015/08/newly-discovered-chinese-hacking-group-hacked-100-websites-to-use-as-watering-holes/",
                    "https://labs.bitdefender.com/2018/02/operation-pzchao-a-possible-return-of-the-iron-tiger-apt/",
                    "https://securelist.com/luckymouse-hits-national-data-center/86083/",
                    "https://attack.mitre.org/groups/G0027/"
                ],
                "synonyms": [
                    "Emissary Panda",
                    "APT27",
                    "APT 27",
                    "Threat Group 3390",
                    "Bronze Union",
                    "Iron Tiger",
                    "TG-3390",
                    "TEMP.Hippo",
                    "Group 35",
                    "ZipToken"
                ]
            },
            "related": [
                {
                    "dest-uuid": "fb366179-766c-4a4a-afa1-52bff1fd601c",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "834e0acd-d92a-4e38-bb14-dc4159d7cb32",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                },
                {
                    "dest-uuid": "f1b9f7d6-6ab1-404b-91a6-a1ed1845c045",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "4af45fea-72d3-11e8-846c-d37699506c8d",
            "value": "LuckyMouse",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "USA",
                    "JPN",
                    "TWN",
                    "IND",
                    "CAN",
                    "CHN",
                    "THA",
                    "ISR",
                    "AUS",
                    "PRK",
                    "RUS",
                    "IRN"
                ]
            }
        },
        {
            "description": "The Rancor group\u2019s attacks use two primary malware families which are naming DDKONG and PLAINTEE. DDKONG is used throughout the campaign and PLAINTEE appears to be new addition to these attackers\u2019 toolkit.  Countries Unit 42 has identified as targeted by Rancor with these malware families include, but are not limited to Singapore and Cambodia.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Singapore",
                    "Cambodia"
                ],
                "cfr-target-category": [
                    "Government",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://researchcenter.paloaltonetworks.com/2018/06/unit42-rancor-targeted-attacks-south-east-asia-using-plaintee-ddkong-malware-families/",
                    "https://www.cfr.org/interactive/cyber-operations/rancor"
                ],
                "synonyms": [
                    "Rancor group"
                ]
            },
            "uuid": "79c7c7e0-79d5-11e8-9b9c-1ff96be20c0b",
            "value": "RANCOR",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "SGP",
                    "KHM"
                ]
            }
        },
        {
            "description": "While it is not clear exactly what the attacker is looking for, what is clear is that once he finds it, a second stage of the attack awaits, fetching additional modules and/or malware from the Command and Control server. This then is a surveillance attack in progress and has been dubbed \u2018Big Bang\u2019 due to the attacker\u2019s fondness for the \u2018Big Bang Theory\u2019 TV show, after which some of the malware\u2019s modules are named.",
            "meta": {
                "refs": [
                    "https://research.checkpoint.com/apt-attack-middle-east-big-bang/",
                    "https://blog.talosintelligence.com/2017/06/palestine-delphi.html"
                ]
            },
            "uuid": "a3cc5105-3bc6-498b-8d53-981e12d86909",
            "value": "The Big Bang",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "In mid-July, Palo Alto Networks Unit 42 identified a small targeted phishing campaign aimed at a government organization. While tracking the activities of this campaign, we identified a repository of additional malware, including a web server that was used to host the payloads used for both this attack as well as others.",
            "meta": {
                "refs": [
                    "https://researchcenter.paloaltonetworks.com/2017/10/unit42-tracking-subaat-targeted-phishing-attacks-point-leader-threat-actors-repository/"
                ]
            },
            "uuid": "a7bc4ef2-971a-11e8-9bf0-13aa7d6d8651",
            "value": "Subaat",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Unit 42 researchers have been tracking Subaat, an attacker, since 2017. Recently Subaat drew our attention due to renewed targeted attack activity. Part of monitoring Subaat included realizing the actor was possibly part of a larger crew of individuals responsible for carrying out targeted attacks against worldwide governmental organizations. Technical analysis on some of the attacks as well as attribution links with Pakistan actors have been already depicted by 360 and Tuisec, in which they found interesting connections to a larger group of attackers Unit 42 researchers have been tracking, which we are calling Gorgon Group.",
            "meta": {
                "refs": [
                    "https://unit42.paloaltonetworks.com/unit42-gorgon-group-slithering-nation-state-cybercrime/",
                    "https://unit42.paloaltonetworks.com/unit42-tracking-subaat-targeted-phishing-attacks-point-leader-threat-actors-repository/",
                    "https://unit42.paloaltonetworks.com/aggah-campaign-bit-ly-blogspot-and-pastebin-used-for-c2-in-large-scale-campaign/",
                    "https://attack.mitre.org/groups/G0078/"
                ],
                "synonyms": [
                    "Gorgon Group",
                    "Subaat"
                ]
            },
            "uuid": "e47c2c4d-706b-4098-92a2-b93e7103e131",
            "value": "The Gorgon Group",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "In July 2018, Unit 42 analyzed a targeted attack using a novel file type against at least one government agency in the Middle East. It was carried out by a previously unpublished threat group we track as DarkHydrus. Based on our telemetry, we were able to uncover additional artifacts leading us to believe this adversary group has been in operation with their current playbook since early 2016. This attack diverged from previous attacks we observed from this group as it involved spear-phishing emails sent to targeted organizations with password protected RAR archive attachments that contained malicious Excel Web Query files (.iqy).",
            "meta": {
                "refs": [
                    "https://researchcenter.paloaltonetworks.com/2018/07/unit42-new-threat-actor-group-darkhydrus-targets-middle-east-government/",
                    "https://mobile.twitter.com/360TIC/status/1083289987339042817",
                    "https://ti.360.net/blog/articles/latest-target-attack-of-darkhydruns-group-against-middle-east-en/",
                    "https://unit42.paloaltonetworks.com/unit42-darkhydrus-uses-phishery-harvest-credentials-middle-east/",
                    "https://unit42.paloaltonetworks.com/darkhydrus-delivers-new-trojan-that-can-use-google-drive-for-c2-communications/",
                    "https://attack.mitre.org/groups/G0079/"
                ],
                "synonyms": [
                    "LazyMeerkat"
                ]
            },
            "uuid": "ce2c2dfd-2445-4fbc-a747-9e7092e383f9",
            "value": "DarkHydrus",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Recorded Future\u2019s Insikt Group has identified two new cyberespionage campaigns targeting the Tibetan Community over the past two years. The campaigns, which we are collectively naming RedAlpha, combine light reconnaissance, selective targeting, and diverse malicious tooling. We discovered this activity as the result of pivoting off of a new malware sample observed targeting the Tibetan community based in India.",
            "meta": {
                "refs": [
                    "https://www.recordedfuture.com/redalpha-cyber-campaigns/",
                    "https://go.recordedfuture.com/hubfs/reports/cta-2018-0626.pdf"
                ]
            },
            "uuid": "71a3b962-9a36-11e8-88f8-b31d20c6fa2a",
            "value": "RedAlpha",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "In March 2017, the 360 Chasing Team found a sample of targeted attacks that confirmed the previously unknown sample of APT's attack actions, which the organization can now trace back at least in April 2016. The chasing team named the attack organization APT-C-35. In June 2017, the 360 Threat Intelligence Center discovered the organization\u2019s new attack activity, confirmed and exposed the gang\u2019s targeted attacks against Pakistan, and analyzed in detail. The unique EHDevel malicious code framework used by the organization",
            "meta": {
                "refs": [
                    "https://ti.360.net/blog/articles/latest-activity-of-apt-c-35/",
                    "https://www.netscout.com/blog/asert/donot-team-leverages-new-modular-malware-framework-south-asia",
                    "https://ti.360.net/blog/articles/donot-group-is-targeting-pakistani-businessman-working-in-china-en/"
                ],
                "synonyms": [
                    "DoNot Team",
                    "Donot Team",
                    "APT-C-35"
                ]
            },
            "uuid": "b9dc4e81-909f-4324-8b25-a0f359cd88e0",
            "value": "APT-C-35",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "This threat actor targets organizations in the finance, defense, aerospace, technology, health-care, and automotive sectors and media organizations in East Asia for the purpose of espionage. Believed to be responsible for the targeting of South Korean actors prior to the meeting of Donald J. Trump and Kim Jong-un",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "South Korea",
                    "Japan"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "country": "China",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/temptick"
                ]
            },
            "uuid": "3f3ff6de-a6a7-11e8-92b4-3743eb1c7762",
            "value": "TempTick",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "KOR",
                    "JPN"
                ]
            }
        },
        {
            "description": "This threat actor uses spear-phishing techniques to target parliaments, government ministries, academics, and media organizations, primarily in the Middle East, for the purpose of espionage.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "Palestine",
                    "United Arab Emirates",
                    "Qatar",
                    "Somalia",
                    "Syria",
                    "Canada",
                    "Germany",
                    "Serbia",
                    "Kuwait",
                    "Egypt",
                    "Saudi Arabia",
                    "Chile",
                    "Iraq",
                    "India",
                    "United States",
                    "Israel",
                    "Russia",
                    "South Korea",
                    "Jordan",
                    "Djibouti",
                    "Lebonon",
                    "Morocco",
                    "Iran",
                    "United Kingdom",
                    "Afghanistan",
                    "Oman",
                    "Denmark"
                ],
                "cfr-target-category": [
                    "Government",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/operation-parliament",
                    "https://securelist.com/operation-parliament-who-is-doing-what/85237/"
                ]
            },
            "uuid": "e20e8eb8-a6b4-11e8-8a92-6ba6e7540c6d",
            "value": "Operation Parliament",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "PSE",
                    "ARE",
                    "QAT",
                    "SOM",
                    "SYR",
                    "CAN",
                    "DEU",
                    "SRB",
                    "KWT",
                    "EGY",
                    "SAU",
                    "CHL",
                    "IRQ",
                    "IND",
                    "USA",
                    "ISR",
                    "RUS",
                    "KOR",
                    "JOR",
                    "DJI",
                    "MAR",
                    "IRN",
                    "GBR",
                    "AFG",
                    "OMN",
                    "DNK"
                ]
            }
        },
        {
            "description": "This threat actor uses spear-phishing techniques to target private-sector energy, defense, aerospace, research, and media organizations and embassies in Africa, Europe, and the Middle East, for the purpose of espionage.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "South Africa",
                    "Malaysia",
                    "Kenya",
                    "Suriname",
                    "United Kingdom"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/inception-framework"
                ]
            },
            "uuid": "71ef51ca-a791-11e8-a026-07980ca910ca",
            "value": "Inception Framework",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "ZAF",
                    "MYS",
                    "KEN",
                    "SUR",
                    "GBR"
                ]
            }
        },
        {
            "description": "This threat actor targets software companies and political organizations in the United States, China, Japan, and South Korea. It primarily acts to support cyber operations conducted by other threat actors affiliated with Chinese intelligence services.\nBelieved to be associated with the Axiom, APT 17, and Mirage threat actors. Believed to share the same tools and infrastructure as the threat actors that carried out Operation Aurora, the 2015 targeting of video game companies, the 2015 targeting of the Thai government, and the 2017 targeting of Chinese-language news websites",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States",
                    "South Korea",
                    "United Kingdom",
                    "China",
                    "Japan"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/winnti-umbrella"
                ]
            },
            "uuid": "9cebfaa8-a797-11e8-99e0-3ffa312b9a10",
            "value": "Winnti Umbrella",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA",
                    "KOR",
                    "GBR",
                    "CHN",
                    "JPN"
                ]
            }
        },
        {
            "description": "This threat actor targets Uighurs\u2014a minority ethnic group located primarily in northwestern China\u2014and devices from Chinese mobile phone manufacturer Xiaomi, for espionage purposes.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "Uighurs"
                ],
                "cfr-target-category": [
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/henbox"
                ]
            },
            "uuid": "36ee04f4-a9df-11e8-b92b-d7ddfd3a8896",
            "value": "HenBox",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "This threat actor targets nongovernmental organizations using Mongolian-themed lures for espionage purposes.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "United States"
                ],
                "cfr-target-category": [
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/mustang-panda"
                ]
            },
            "uuid": "78bf726c-a9e6-11e8-9e43-77249a2f7339",
            "value": "Mustang Panda",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "USA"
                ]
            }
        },
        {
            "description": "This threat actor targets organizations in the satellite communications, telecommunications, geospatial-imaging, and defense sectors in the United States and Southeast Asia for espionage purposes.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Unknown",
                "cfr-suspected-victims": [
                    "United States"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/thrip",
                    "https://www.symantec.com/blogs/threat-intelligence/thrip-hits-satellite-telecoms-defense-targets"
                ]
            },
            "uuid": "98be4300-a9ef-11e8-9a95-bb9221083cfc",
            "value": "Thrip",
            "aptmap": {
                "operatingFrom": null,
                "victims": [
                    "USA"
                ]
            }
        },
        {
            "description": "This threat actor targets organizations in the satellite communications, telecommunications, geospatial-imaging, and defense sectors in the United States and Southeast Asia for espionage purposes.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Pakistan",
                "cfr-suspected-victims": [
                    "Pakistan",
                    "Iraq",
                    "Australia",
                    "Afghanistan",
                    "United Arab Emirates",
                    "Germany",
                    "India",
                    "United States"
                ],
                "cfr-target-category": [
                    "Government",
                    "Civil society"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Pakistan",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/stealth-mango-and-tangelo"
                ]
            },
            "uuid": "f82b352e-a9f8-11e8-8be8-fbcf6eddd58c",
            "value": " Stealth Mango and Tangelo ",
            "aptmap": {
                "operatingFrom": "PAK",
                "victims": [
                    "PAK",
                    "IRQ",
                    "AUS",
                    "AFG",
                    "ARE",
                    "DEU",
                    "IND",
                    "USA"
                ]
            }
        },
        {
            "description": "Malware developers have started to use the zero-day exploit for Task Scheduler component in Windows, two days after proof-of-concept code for the vulnerability appeared online.\n\nA security researcher who uses the online name SandboxEscaper on August 27 released the source code for exploiting a security bug in the Advanced Local Procedure Call (ALPC) interface used by Windows Task Scheduler.\n\nMore specifically, the problem is with the SchRpcSetSecurity API function, which fails to properly check user's permissions, allowing write privileges on files in C:\\Windows\\Task.\n\nThe vulnerability affects Windows versions 7 through 10 and can be used by an attacker to escalate their privileges to all-access SYSTEM account level.\n\nA couple of days after the exploit code became available (source and binary), malware researchers at ESET noticed its use in active malicious campaigns from a threat actor they call PowerPool, because of their tendency to use tools mostly written in PowerShell for lateral movement.\n\nThe group appears to have a small number of victims in the following countries: Chile, Germany, India, the Philippines, Poland, Russia, the United Kingdom, the United States, and Ukraine.\n\nThe researchers say that PowerPool developers did not use the binary version of the exploit, deciding instead to make some subtle changes to the source code before recompiling it.",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/windows-task-scheduler-zero-day-exploited-by-malware/"
                ]
            },
            "uuid": "abd89986-b1b0-11e8-b857-efe290264006",
            "value": "PowerPool",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Bahamut is a threat actor primarily operating in Middle East and Central Asia, suspected to be a private contractor to several state sponsored actors. They were observed conduct phishing as well as desktop and mobile malware campaigns.",
            "meta": {
                "refs": [
                    "https://www.bellingcat.com/news/mena/2017/06/12/bahamut-pursuing-cyber-espionage-actor-middle-east/",
                    "https://www.bellingcat.com/resources/case-studies/2017/10/27/bahamut-revisited-cyber-espionage-middle-east-south-asia/"
                ]
            },
            "uuid": "dc3edacc-bb24-11e8-81fb-8c16458922a7",
            "value": "Bahamut",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Iron group has developed multiple types of malware (backdoors, crypto-miners, and ransomware) for Windows, Linux and Android platforms. They have used their malware to successfully infect, at least, a few thousand victims.",
            "meta": {
                "refs": [
                    "https://www.intezer.com/iron-cybercrime-group-under-the-scope-2/"
                ],
                "synonyms": [
                    "Iron Cyber Group"
                ]
            },
            "uuid": "6a0ea861-229a-45a6-98f5-228f69b43905",
            "value": "Iron Group",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "This threat actor targets critical infrastructure entities in the oil and gas sector, primarily in Ukraine. The threat actors deploy the BugDrop malware to remotely access the microphones in their targets' computers to eavesdrop on conversations.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "Ukraine",
                    "Austria",
                    "Russia",
                    "Saudi Arabia"
                ],
                "cfr-target-category": [
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/operation-bugdrop"
                ]
            },
            "uuid": "75ae52b2-bca3-11e8-af90-a78f33eee6c1",
            "value": "Operation BugDrop",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "UKR",
                    "AUT",
                    "RUS",
                    "SAU"
                ]
            }
        },
        {
            "description": "This threat actor targets governments, diplomatic missions, academics, and energy and aerospace organizations for the purpose of espionage. Also known as the Rocra and believed to be the same threat actor as Cloud Atlas",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "Russia",
                    "Belgium",
                    "Armenia",
                    "Ukraine",
                    "Belarus",
                    "Kazakhstan",
                    "India",
                    "Iran",
                    "United States",
                    "Greece",
                    "Azerbaijan",
                    "Afghanistan",
                    "Turkmenistan",
                    "Vietnam",
                    "Italy"
                ],
                "cfr-target-category": [
                    "Government",
                    "Private sector"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/red-october"
                ],
                "synonyms": [
                    "the Rocra"
                ]
            },
            "uuid": "358b8982-bcaa-11e8-8a5b-4b618197c5b0",
            "value": "Red October",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "RUS",
                    "BEL",
                    "ARM",
                    "UKR",
                    "BLR",
                    "KAZ",
                    "IND",
                    "IRN",
                    "USA",
                    "GRC",
                    "AZE",
                    "AFG",
                    "TKM",
                    "VNM",
                    "ITA"
                ]
            }
        },
        {
            "description": "This threat actor targets governments and diplomatic organizations for espionage purposes.",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "Russian Federation",
                "cfr-suspected-victims": [
                    "Russia",
                    "India",
                    "Kazakhstan",
                    "Czech Republic",
                    "Belarus"
                ],
                "cfr-target-category": [
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "Russian Federation",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/cloud-atlas"
                ]
            },
            "uuid": "1572f618-bcb3-11e8-841b-1fd7f9cfe126",
            "value": "Cloud Atlas",
            "aptmap": {
                "operatingFrom": "RUS",
                "victims": [
                    "RUS",
                    "IND",
                    "KAZ",
                    "CZE",
                    "BLR"
                ]
            }
        },
        {
            "description": "This threat actor compromises civil society groups the Chinese Communist Party views as hostile to its interests, such as Tibetan, Uyghur, Hong Kong, and Taiwanese activist. The threat actor also targeted the Myanmar electoral commission. ",
            "meta": {
                "attribution-confidence": "50",
                "cfr-suspected-state-sponsor": "China",
                "cfr-suspected-victims": [
                    "China",
                    "Myanmar",
                    "Hong Kong",
                    "Taiwan"
                ],
                "cfr-target-category": [
                    "Civil society",
                    "Government"
                ],
                "cfr-type-of-incident": "Espionage",
                "country": "China",
                "refs": [
                    "https://www.cfr.org/interactive/cyber-operations/unnamed-actor"
                ]
            },
            "uuid": "bea5e256-bcc0-11e8-a478-bbf7e7585a1e",
            "value": "Unnamed Actor",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": [
                    "CHN",
                    "MMR",
                    "HKG",
                    "TWN"
                ]
            }
        },
        {
            "description": "\u201dA threat group associated with the Iranian government. The threat group created lookalike domains to phish targets and used credentials to steal intellectual property from specific resources, including library systems.\u201d",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/iranian-hackers-charged-in-march-are-still-actively-phishing-universities/",
                    "https://www.cyberscoop.com/cobalt-dickens-iran-mabna-institiute-dell-secureworks/"
                ],
                "synonyms": [
                    "Cobalt Dickens"
                ]
            },
            "uuid": "6c79bd1a-bfde-11e8-8c33-db4d9968671a",
            "value": "COBALT DICKENS",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Digital threat management company RiskIQ tracks the activity of MageCart group and reported their use of web-based card skimmers since 2016.",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/british-airways-fell-victim-to-card-scraping-attack/",
                    "https://www.bleepingcomputer.com/news/security/feedify-hacked-with-magecart-information-stealing-script/",
                    "https://www.bleepingcomputer.com/news/security/magecart-group-compromises-plugin-used-in-thousands-of-stores-makes-rookie-mistake/",
                    "https://www.bleepingcomputer.com/news/security/visiondirect-data-breach-caused-by-magecart-attack/",
                    "https://www.bleepingcomputer.com/news/security/magecart-group-sabotages-rival-to-ruin-data-and-reputation/"
                ]
            },
            "uuid": "0768fd50-c547-11e8-9aa5-776183769eab",
            "value": "MageCart",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "An extensive surveillance operation targets specific groups of individuals with malicious mobile apps that collect sensitive information on the device along with surrounding voice recordings. Researchers with CheckPoint discovered the attack and named it Domestic Kitten. The targets are Kurdish and Turkish natives, and ISIS supporters, all Iranian citizens.",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/domestic-kitten-apt-operates-in-silence-since-2016/"
                ]
            },
            "uuid": "dda1b28e-c558-11e8-8666-27cf61d1d7ee",
            "value": "Domestic Kitten",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Treasury has identified a sophisticated cyber-enabled ATM cash out campaign we are calling FASTCash. FASTCash has been active since late 2016 targeting banks in Africa and Asia to remotely compromise payment switch application servers within banks to facilitate fraudulent transactions, primarily involving ATMs, to steal cash equivalent to tens of millions of dollars. FBI has attributed malware used in this campaign to the North Korean government. We expect FASTCash to continue targeting retail payment systems vulnerable to remote exploitation.",
            "uuid": "e38d32a2-c708-11e8-8785-472c4cfccd85",
            "value": "FASTCash",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            },
            "meta": {}
        },
        {
            "description": "According to new research by Kaspersky's GReAT team, the online criminal activities of the Roaming Mantis Group have continued to evolve since they were first discovered in April 2018. As part of their activities, this group hacks into exploitable routers and changes their DNS configuration. This allows the attackers to redirect the router user's traffic to malicious Android apps disguised as Facebook and Chrome or to Apple phishing pages that were used to steal Apple ID credentials.\nRecently, Kaspersky has discovered that this group is testing a new monetization scheme by redirecting iOS users to pages that contain the Coinhive in-browser mining script rather than the normal Apple phishing page. When users are redirected to these pages, they will be shown a blank page in the browser, but their CPU utilization will jump to 90% or higher.",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/roaming-mantis-group-testing-coinhive-miner-redirects-on-iphones/"
                ],
                "synonyms": [
                    "Roaming Mantis Group"
                ]
            },
            "uuid": "b27beb94-ce25-11e8-8e11-2f1a59bd0e91",
            "value": "Roaming Mantis",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "ESET research reveals a successor to the infamous BlackEnergy APT group targeting critical infrastructure, quite possibly in preparation for damaging attacks",
            "meta": {
                "refs": [
                    "https://www.eset.com/int/greyenergy-exposed/",
                    "https://www.welivesecurity.com/2018/10/17/greyenergy-updated-arsenal-dangerous-threat-actors/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "f512de42-f76b-40d2-9923-59e7dbdfec35",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "d52ca4c4-d214-11e8-8d29-c3e7cb78acce",
            "value": "GreyEnergy",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "The Shadow Brokers (TSB) is a hacker group who first appeared in the summer of 2016. They published several leaks containing hacking tools from the National Security Agency (NSA, including several zero-day exploits.[1] Specifically, these exploits and vulnerabilities targeted enterprise firewalls, antivirus software, and Microsoft products. The Shadow Brokers originally attributed the leaks to the Equation Group threat actor, who have been tied to the NSA's Tailored Access Operations unit.",
            "meta": {
                "refs": [
                    "https://en.wikipedia.org/wiki/The_Shadow_Brokers",
                    "https://securelist.com/darkpulsar/88199/"
                ],
                "synonyms": [
                    "The ShadowBrokers",
                    "TSB",
                    "Shadow Brokers",
                    "ShadowBrokers"
                ]
            },
            "uuid": "d5e90854-d5c9-11e8-98b9-1f98eb80d30a",
            "value": "The Shadow Brokers",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Malware experts at CSE Cybsec uncovered a massive malvertising campaign dubbed EvilTraffic leveraging tens of thousands compromised websites. Crooks exploited some CMS vulnerabilities to upload and execute arbitrary PHP pages used to generate revenues via advertising.",
            "meta": {
                "refs": [
                    "http://securityaffairs.co/wordpress/68059/cyber-crime/eviltraffic-malvertising-campaign.html",
                    "http://csecybsec.com/download/zlab/20180121_CSE_Massive_Malvertising_Report.pdf"
                ],
                "synonyms": [
                    "Operation EvilTraffic"
                ]
            },
            "uuid": "c2d5a052-dc30-11e8-9643-d76f3b9c94fa",
            "value": "EvilTraffic",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "HookAds is a malvertising campaign that purchases cheap ad space on low quality ad networks commonly used by adult web sites, online games, or blackhat seo sites. These ads will include JavaScript that redirects a visitor through a serious of decoy sites that look like pages filled with native advertisements, online games, or other low quality pages. Under the right circumstances, a visitor will silently load the Fallout exploit kit, which will try and install its malware payload.",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/hookads-malvertising-installing-malware-via-the-fallout-exploit-kit/"
                ]
            },
            "uuid": "dce617eb-a3b6-4a9a-bd76-575c424f9761",
            "value": "HookAds",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "INDRIK SPIDER is a sophisticated eCrime group that has been operating Dridex since June 2014. In 2015 and 2016, Dridex was one of the most prolific eCrime banking trojans on the market and, since 2014, those efforts are thought to have netted INDRIK SPIDER millions of dollars in criminal profits. Throughout its years of operation, Dridex has received multiple updates with new modules developed and new anti-analysis features added to the malware.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/blog/big-game-hunting-the-evolution-of-indrik-spider-from-dridex-wire-fraud-to-bitpaymer-targeted-ransomware/"
                ]
            },
            "uuid": "658314bc-3bb8-48d2-913a-c528607b75c8",
            "value": "INDRIK SPIDER",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Cisco Talos recently discovered a new campaign targeting Lebanon and the United Arab Emirates (UAE) affecting .gov domains, as well as a private Lebanese airline company. Based on our research, it's clear that this adversary spent time understanding the victims' network infrastructure in order to remain under the radar and act as inconspicuous as possible during their attacks.\nBased on this actor's infrastructure and TTPs, we haven't been able to connect them with any other campaign or actor that's been observed recently. This particular campaign utilizes two fake, malicious websites containing job postings that are used to compromise targets via malicious Microsoft Office documents with embedded macros. The malware utilized by this actor, which we are calling \"DNSpionage,\" supports HTTP and DNS communication with the attackers.\nIn a separate campaign, the attackers used the same IP to redirect the DNS of legitimate .gov and private company domains. During each DNS compromise, the actor carefully generated Let's Encrypt certificates for the redirected domains. These certificates provide X.509 certificates for TLS free of charge to the user. We don't know at this time if the DNS redirections were successful.\nIn this post, we will break down the attackers' methods and show how they used malicious documents to attempt to trick users into opening malicious websites that are disguised as \"help wanted\" sites for job seekers. Additionally, we will describe the malicious DNS redirection and the timeline of the events.",
            "meta": {
                "refs": [
                    "https://blog.talosintelligence.com/2018/11/dnspionage-campaign-targets-middle-east.html",
                    "https://blog.talosintelligence.com/2019/04/dnspionage-brings-out-karkoff.html",
                    "https://www.fireeye.com/blog/threat-research/2019/01/global-dns-hijacking-campaign-dns-record-manipulation-at-scale.html",
                    "https://www.crowdstrike.com/blog/widespread-dns-hijacking-activity-targets-multiple-sectors/",
                    "https://krebsonsecurity.com/tag/dnspionage/"
                ]
            },
            "uuid": "608a903a-8145-4fd1-84bc-235e278480bf",
            "value": "DNSpionage",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Dubbed DarkVishnya, the attacks targeted at least eight banks using readily-available gear such as netbooks or inexpensive laptops, Raspberry Pi mini-computers, or a Bash Bunny - a USB-sized piece hardware for penetration testing purposes that can pose as a keyboard, flash storage, network adapter, or as any serial device.",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/netbooks-rpis-and-bash-bunny-gear-attacking-banks-from-the-inside/"
                ]
            },
            "uuid": "db7fd7dd-28f7-4e8d-a807-8405e4b0f4e2",
            "value": "DarkVishnya",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "What\u2019s noteworthy is that according to the introduction on the compromised website of the polyclinic (http://www.p2f.ru), the institution was established in 1965 and it was founded by the Presidential Administration of Russia. The multidisciplinary outpatient institution mainly serves the civil servants of the highest executive, legislative, judicial authorities of the Russian Federation, as well as famous figures of science and art.\nSince it is the first detection of this APT attack by 360 Security on a global scale, we code-named it as \u201cOperation Poison Needles\u201d, considering that the target was a medical institution. Currently, the attribution of the attacker is still under investigation. However, the special background of the polyclinic and the sensitiveness of the group it served both indicate the attack is highly targeted. Simultaneously, the attack occurred at a very sensitive timing of the Kerch Strait Incident, so it also aroused the assumption on the political attribution of the attack.",
            "meta": {
                "refs": [
                    "http://blogs.360.cn/post/PoisonNeedles_CVE-2018-15982_EN"
                ]
            },
            "uuid": "08ff3cb6-c292-4360-a978-6f05775881ed",
            "value": "Operation Poison Needles",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "From November 2017 to October 2018, we attributed 14 campaigns to the GC threat actors that used a specific MaaS provider (hereinafter \u201cthe Provider\u201d) offered by a known individual (hereinafter \u201cthe Provider Operator\u201d).",
            "meta": {
                "refs": [
                    "https://medium.com/@quoscient/golden-chickens-uncovering-a-malware-as-a-service-maas-provider-and-two-new-threat-actors-using-61cf0cb87648"
                ],
                "synonyms": [
                    "Golden Chickens",
                    "Golden Chickens01",
                    "Golden Chickens 01"
                ]
            },
            "related": [
                {
                    "dest-uuid": "6d50a8a2-fdf5-11e8-9db3-833f231caac8",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "6bd7c91a-fdf5-11e8-95a8-e712ad4b0a9d",
            "value": "GC01",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "From November 2017 to October 2018, we attributed 14 campaigns to the GC threat actors that used a specific MaaS provider (hereinafter \u201cthe Provider\u201d) offered by a known individual (hereinafter \u201cthe Provider Operator\u201d).",
            "meta": {
                "refs": [
                    "https://medium.com/@quoscient/golden-chickens-uncovering-a-malware-as-a-service-maas-provider-and-two-new-threat-actors-using-61cf0cb87648"
                ],
                "synonyms": [
                    "Golden Chickens",
                    "Golden Chickens02",
                    "Golden Chickens 02"
                ]
            },
            "related": [
                {
                    "dest-uuid": "6bd7c91a-fdf5-11e8-95a8-e712ad4b0a9d",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "6d50a8a2-fdf5-11e8-9db3-833f231caac8",
            "value": "GC02",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "The McAfee Advanced Threat Research team and McAfee Labs Malware Operations Group have discovered a new global campaign targeting nuclear, defense, energy, and financial companies, based on McAfee\u00ae Global Threat Intelligence. This campaign, Operation Sharpshooter, leverages an in-memory implant to download and retrieve a second-stage implant\u2014which we call Rising Sun\u2014for further exploitation. According to our analysis, the Rising Sun implant uses source code from the Lazarus Group\u2019s 2015 backdoor Trojan Duuzer in a new framework to infiltrate these key industries.\nOperation Sharpshooter\u2019s numerous technical links to the Lazarus Group seem too obvious to immediately draw the conclusion that they are responsible for the attacks, and instead indicate a potential for false flags. Our research focuses on how this actor operates, the global impact, and how to detect the attack. We shall leave attribution to the broader security community.",
            "meta": {
                "refs": [
                    "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/operation-sharpshooter-targets-global-defense-critical-infrastructure/",
                    "https://www.bleepingcomputer.com/news/security/op-sharpshooter-connected-to-north-koreas-lazarus-group/"
                ]
            },
            "related": [
                {
                    "dest-uuid": "68391641-859f-4a9a-9a1e-3e5cf71ec376",
                    "tags": [
                        "estimative-language:likelihood-probability=\"likely\""
                    ],
                    "type": "similar"
                }
            ],
            "uuid": "b06c3af1-0243-4428-88da-b3451c345e1e",
            "value": "Operation Sharpshooter",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "TA505, the name given by Proofpoint, has been in the cybercrime business for at least four years. This is the group behind the infamous Dridex banking trojan and Locky ransomware, delivered through malicious email campaigns via Necurs botnet. Other malware associated with TA505 include Philadelphia and GlobeImposter ransomware families.",
            "meta": {
                "refs": [
                    "https://www.bleepingcomputer.com/news/security/ta505-group-adopts-new-servhelper-backdoor-and-flawedgrace-rat/",
                    "https://www.proofpoint.com/sites/default/files/ta505_timeline_final4_0.png"
                ]
            },
            "uuid": "03c80674-35f8-4fe0-be2b-226ed0fcd69f",
            "value": "TA505",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "GRIM SPIDER is a sophisticated eCrime group that has been operating the Ryuk ransomware since August 2018, targeting large organizations for a high-ransom return.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/"
                ]
            },
            "uuid": "3cf6dbb5-bf9e-47d4-a8d5-b6d76f5a791f",
            "value": "GRIM SPIDER",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "GRIM SPIDER is a sophisticated eCrime group that has been operating the Ryuk ransomware since August 2018, targeting large organizations for a high-ransom return. This methodology, known as \u201cbig game hunting,\u201d signals a shift in operations for WIZARD SPIDER, a criminal enterprise of which GRIM SPIDER appears to be a cell. The WIZARD SPIDER threat group, known as the Russia-based operator of the TrickBot banking malware, had focused primarily on wire fraud in the past.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/"
                ]
            },
            "uuid": "bdf4fe4f-af8a-495f-a719-cf175cecda1f",
            "value": "WIZARD SPIDER",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "MUMMY SPIDER is a criminal entity linked to the core development of the malware most commonly known as Emotet or Geodo. First observed in mid-2014, this malware shared code with the Bugat (aka Feodo) banking Trojan. However, MUMMY SPIDER swiftly developed the malware\u2019s capabilities to include an RSA key exchange for command and control (C2) communication and a modular architecture.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/",
                    "https://www.crowdstrike.com/blog/meet-crowdstrikes-adversary-of-the-month-for-february-mummy-spider/",
                    "https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta542-banker-malware-distribution-service"
                ],
                "synonyms": [
                    "TA542"
                ]
            },
            "uuid": "c93281be-f6cd-4cd0-a5a3-defde9d77d8b",
            "value": "MUMMY SPIDER",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Open-source reporting has claimed that the Hermes ransomware was developed by the North Korean group STARDUST CHOLLIMA (activities of which have been public reported as part of the \u201cLazarus Group\u201d), because Hermes was executed on a host during the SWIFT compromise of FEIB in October 2017. ",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/"
                ]
            },
            "uuid": "d8e1762a-0063-48c2-9ea1-8d176d14b70f",
            "value": "STARDUST CHOLLIMA",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "In short, \u201cCold River\u201d is a sophisticated threat (actor) that utilizes DNS subdomain hijacking, certificate spoofing, and covert tunneled command and control traffic in combination with complex and convincing lure documents and custom implants.",
            "meta": {
                "refs": [
                    "https://www.lastline.com/labsblog/threat-actor-cold-river-network-traffic-analysis-and-a-deep-dive-on-agent-drable/"
                ],
                "synonyms": [
                    "Nahr Elbard",
                    "Nahr el bared"
                ]
            },
            "uuid": "7d99d2f7-adf0-44e4-9044-d18ff6842a16",
            "value": "Cold River",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "a relatively new threat actor that\u2019s been operating since mid-2016",
            "meta": {
                "refs": [
                    "https://reaqta.com/2019/01/silence-group-targeting-russian-banks/"
                ]
            },
            "uuid": "0d5e17fd-7a71-47fd-b4bc-867cdb833726",
            "value": "Silence group",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "APT39 was created to bring together previous activities and methods used by this actor, and its activities largely align with a group publicly referred to as \"Chafer.\" However, there are differences in what has been publicly reported due to the variances in how organizations track activity. APT39 primarily leverages the SEAWEED and CACHEMONEY backdoors along with a specific variant of the POWBAT backdoor. While APT39's targeting scope is global, its activities are concentrated in the Middle East. APT39 has prioritized the telecommunications sector, with additional targeting of the travel industry and IT firms that support it and the high-tech industry.",
            "meta": {
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2019/01/apt39-iranian-cyber-espionage-group-focused-on-personal-information.html",
                    "https://www.symantec.com/blogs/threat-intelligence/chafer-latest-attacks-reveal-heightened-ambitions",
                    "https://unit42.paloaltonetworks.com/new-python-based-payload-mechaflounder-used-by-chafer/",
                    "https://securelist.com/chafer-used-remexi-malware/89538/",
                    "https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets",
                    "https://attack.mitre.org/groups/G0087/"
                ],
                "synonyms": [
                    "APT 39",
                    "Chafer"
                ]
            },
            "uuid": "c2c64bd3-a325-446f-91a8-b4c0f173a30b",
            "value": "APT39",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "FireEye recently looked deeper into the activity discussed in TrendMicro\u2019s blog and dubbed the \u201cSiesta\u201d campaign. The tools, modus operandi, and infrastructure used in the campaign present two possibilities: either the Chinese cyber-espionage unit APT1 is perpetrating this activity, or another group is using the same tactics and tools as the legacy APT1.\nThe Siesta campaign reinforces the fact that analysts and network defenders should remain on the lookout for known, public indicators and for shared attributes that allow security experts to detect multiple actors with one signature.",
            "meta": {
                "refs": [
                    "https://www.fireeye.com/blog/threat-research/2014/03/a-detailed-examination-of-the-siesta-campaign.html"
                ]
            },
            "uuid": "27c97181-b8e9-43e1-93c0-f953cac45326",
            "value": "Siesta",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Symantec researchers have uncovered a previously unknown attack group that is targeting government and military targets, including several overseas embassies of an Eastern European country, and military and defense targets in the Middle East. This group eschews custom malware and uses living off the land (LotL) tactics and publicly available hack tools to carry out activities that bear all the hallmarks of a cyber espionage campaign.\nThe group, which we have given the name Gallmaker, has been operating since at least December 2017, with its most recent activity observed in June 2018.",
            "meta": {
                "refs": [
                    "https://www.symantec.com/blogs/threat-intelligence/gallmaker-attack-group"
                ]
            },
            "uuid": "c79dab01-3f9f-491e-8a5f-6423339c9f76",
            "value": "Gallmaker",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Throughout 2018, CrowdStrike Intelligence tracked BOSS SPIDER as it regularly updated Samas ransomware and received payments to known Bitcoin (BTC) addresses. This consistent pace of activity came to an abrupt halt at the end of November 2018 when the U.S. DoJ released an indictment for Iran-based individuals Faramarz Shahi Savandi and Mohammad Mehdi Shah Mansouri, alleged members of the group.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "d6a13387-4c98-4a0c-a516-6c36c081b64c",
            "value": "Boss Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "First observed in January 2018, GandCrab ransomware quickly began to proliferate and receive regular updates from its developer, PINCHY SPIDER, which over the course of the year established a RaaS operation with a dedicated set of affiliates.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "80f07c15-cad3-44a2-a8a4-dd14490b5117",
            "value": "Pinchy Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Early in 2018, CrowdStrike Intelligence observed GURU SPIDER supporting the distribution of multiple crimeware families through its flagship malware loader, Quant Loader.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "0a667713-bc31-4a72-9ea3-34fc094a9dde",
            "value": "Guru Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Beginning in January 2018 and persisting through the first half of the year, CrowdStrike Intelligence observed SALTY SPIDER, developer and operator of the long-running Sality botnet, distribute malware designed to target cryptocurrency users.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "7e37be6b-5a94-45f3-bdeb-f494c520eee3",
            "value": "Salty Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "This adversary is suspected of continuing to target upstream providers (e.g., law firms and managed service providers) to support additional intrusions against high-profile assets. In 2018, CrowdStrike observed this adversary using spear-phishing, URL 'web bugs' and scheduled tasks to automate credential harvesting.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "d7a41ada-6687-4a6b-8b5c-396808cdd758",
            "value": "Judgment Panda",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "One of the first observed adopters of the 8.t exploit document builder in late 2017, further KRYPTONITE PANDA activity was limited in 2018. Last known activity for this adversary occurred in June 2018 and involved suspected targeting of Cambodia.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "393ebaad-4f05-4b35-bd31-45ac4ae7472d",
            "value": "Kryptonite Panda",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "In the first quarter of 2018, CrowdStrike Intelligence identified NOMAD PANDA activity targeting Central Asian nations with exploit documents built with the 8.t tool.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "4b7df353-fbcc-4f00-a54f-5121c5edb9be",
            "value": "Nomad Panda",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "This suspected Iran-based adversary conducted long-running SWC campaigns from December 2016 until public disclosure in July 2018. Like other Iran-based actors, the target scope for FLASH KITTEN appears to be focused on the MENA region.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "6e899dd4-f95e-42a0-a5a3-e57249f017cf",
            "value": "Flash Kitten",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "According to CrowdStrike, this actor is using FrameworkPOS, potentially buying access through Dridex infections.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "998b0a78-ff3e-4928-802f-b42e3f5cf491",
            "value": "Skeleton Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "According to CrowdStrike, this actor is using TinyLoader and TinyPOS, potentially buying access through Dridex infections.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "89a05f9f-a6dc-4426-8c15-a8d5ef6d8524",
            "value": "Tiny Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "According to CrowdStrike, this actor is using BokBok/IcedID, potentially buying distribution through Emotet infections.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "0db4c708-f33d-4d46-906d-12fdf7415f62",
            "value": "Lunar Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "In July 2018, the source code of Pegasus, RATPAK SPIDER\u2019s malware framework, was anonymously leaked. This malware has been linked to the targeting of Russia\u2019s financial sector. Associated malware, Buhtrap, which has been leaked previously, was observed this year in connection with SWC campaigns that also targeted Russian users.",
            "meta": {
                "refs": [
                    "https://www.crowdstrike.com/resources/reports/2019-crowdstrike-global-threat-report/"
                ]
            },
            "uuid": "ec3fda76-8c1c-4019-8109-3f92e6b15633",
            "value": "Ratpak Spider",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "ASERT has learned of an APT campaign, possibly originating from DPRK, we are calling STOLEN PENCIL that is targeting academic institutions since at least May 2018.",
            "meta": {
                "refs": [
                    "https://asert.arbornetworks.com/stolen-pencil-campaign-targets-academia/",
                    "https://unit42.paloaltonetworks.com/new-babyshark-malware-targets-u-s-national-security-think-tanks/"
                ]
            },
            "uuid": "769aeaa6-d193-4e90-a818-d74c6ff7b845",
            "value": "STOLEN PENCIL",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "meta": {
                "refs": [
                    "http://download.ahnlab.com/kr/site/library/%5bAnalysis_Report%5dOperation_Kabar_Cobra.pdf",
                    "https://www.ahnlab.com/kr/site/securityinfo/secunews/secuNewsView.do?menu_dist=2&curPage=1&seq=28102"
                ]
            },
            "uuid": "9ba291f2-b107-402d-9083-3128395ff26e",
            "value": "Operation Kabar Cobra",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Since April 2018, an APT group (Blind Eagle, APT-C-36) suspected coming from South America carried out continuous targeted attacks against Colombian government institutions as well as important corporations in financial sector, petroleum industry, professional manufacturing, etc.",
            "meta": {
                "refs": [
                    "https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/"
                ],
                "synonyms": [
                    "Blind Eagle"
                ]
            },
            "uuid": "ae1c64ff-5a37-4291-97f8-ea402c63efd0",
            "value": "APT-C-36",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Resecurity\u2019s research indicates that the attack on Parliament is a part of a multi-year cyberespionage campaign orchestrated by a nation-state actor whom we are calling IRIDIUM. This actor targets sensitive government, diplomatic, and military resources in the countries comprising the Five Eyes intelligence alliance (which includes Australia, Canada, New Zealand, the United Kingdom and the United States)",
            "meta": {
                "attribution-confidence": "10",
                "country": "Iran, Islamic Republic of",
                "refs": [
                    "https://resecurity.com/blog/parliament_races/",
                    "https://www.nbcnews.com/politics/national-security/iranian-backed-hackers-stole-data-major-u-s-government-contractor-n980986"
                ]
            },
            "uuid": "29cfe970-5446-4cfc-a2da-00e9f49e02ba",
            "value": "IRIDIUM",
            "aptmap": {
                "operatingFrom": "IRN",
                "victims": []
            }
        },
        {
            "description": "SandCat, on the other hand, is a group that was discovered more recently by Kaspersky. One of the Windows vulnerabilities patched by Microsoft in December had been exploited by both FruityArmor and SandCat in attacks targeting the Middle East and Africa.  SandCat has been using FinFisher/FinSpy spyware and CHAINSHOT, a piece of malware analyzed earlier this year by Palo Alto Networks. The group has also used the CVE-2018-8589 and CVE-2018-8611 Windows vulnerabilities in its attacks, both of which had a zero-day status when Microsoft released fixes.",
            "meta": {
                "refs": [
                    "https://securelist.com/zero-day-in-windows-kernel-transaction-manager-cve-2018-8611/89253/"
                ]
            },
            "uuid": "dc15f388-a353-4185-b28e-015745f708ba",
            "value": "SandCat",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Operation Comando is a pure cybercrime campaign, possibly with Brazilian origin, with a concrete and persistent focus on the hospitality sector, which proves how a threat actor can be successful in pursuing its objectives while maintaining a cheap budget. The use of DDNS services, publicly available remote access tools, and having a minimum knowledge on software development (in this case VB.NET) has been enough for running a campaign lasting month, and potentially gathering credit card information and other possible data. ",
            "meta": {
                "refs": [
                    "https://unit42.paloaltonetworks.com/operation-comando-or-how-to-run-a-cheap-and-effective-credit-card-business/"
                ]
            },
            "uuid": "35c40ce2-57c0-479e-8a56-efbb8695e395",
            "value": "Operation Comando",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "On March 17, 2019, 360 Threat Intelligence Center captured a target attack sample against the Middle East by exploiting WinRAR vulnerability (CVE-2018-20250[6]), and it seems that the attack is carried out by the Goldmouse APT group (APT-C-27). There is a decoy Word document inside the archive regarding terrorist attacks to lure the victim into decompressing. When the archive gets decompressed on the vulnerable computer, the embedded njRAT backdoor (Telegram Desktop.exe) will be extracted to the startup folder and then triggered into execution if the victim restarts the computer or performs re-login. After that, the attacker is capable to control the compromised device.",
            "meta": {
                "refs": [
                    "https://ti.360.net/blog/articles/apt-c-27-(goldmouse):-suspected-target-attack-against-the-middle-east-with-winrar-exploit-en/"
                ],
                "synonyms": [
                    "GoldMouse"
                ]
            },
            "uuid": "ee7f535d-cc3e-40f3-99f3-c97963cfa250",
            "value": "APT-C-27",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Newly discovered supply chain attack that leveraged ASUS Live Update software.\nThe goal of the attack was to surgically target an unknown pool of users, which were identified by their network adapters\u2019 MAC addresses. To achieve this, the attackers had hardcoded a list of MAC addresses in the trojanized samples and this list was used to identify the actual intended targets of this massive operation. We were able to extract more than 600 unique MAC addresses from over 200 samples used in this attack. Of course, there might be other samples out there with different MAC addresses in their list.",
            "meta": {
                "refs": [
                    "https://securelist.com/operation-shadowhammer/89992/"
                ]
            },
            "uuid": "401c30c7-4317-458a-9b0a-379a44d63457",
            "value": "Operation ShadowHammer",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "In July 2018, an attack on Singapore\u2019s largest public health organization, SingHealth, resulted in a reported 1.5 million patient records being stolen. Until now, nothing was known about who was responsible for this attack. Symantec researchers have discovered that this attack group, which we call Whitefly, has been operating since at least 2017, has targeted organizations based mostly in Singapore across a wide variety of sectors, and is primarily interested in stealing large amounts of sensitive information.",
            "meta": {
                "refs": [
                    "https://www.symantec.com/blogs/threat-intelligence/whitefly-espionage-singapore"
                ]
            },
            "uuid": "943f490e-ac7f-40fe-b6f3-33e2623649d2",
            "value": "Whitefly",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": " This blog post discusses the technical details of a state-sponsored attack manipulating DNS systems. While this incident is limited to targeting primarily national security organizations in the Middle East and North Africa, and we do not want to overstate the consequences of this specific campaign, we are concerned that the success of this operation will lead to actors more broadly attacking the global DNS system. DNS is a foundational technology supporting the Internet. Manipulating that system has the potential to undermine the trust users have on the internet. That trust and the stability of the DNS system as a whole drives the global economy. Responsible nations should avoid targeting this system, work together to establish an accepted global norm that this system and the organizations that control it are off-limits, and cooperate in pursuing those actors who act irresponsibly by targeting this system.",
            "meta": {
                "refs": [
                    "https://blog.talosintelligence.com/2019/04/seaturtle.html"
                ]
            },
            "uuid": "ce7bba52-5ae8-44ea-9979-68502d832ab7",
            "value": "Sea Turtle",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Last Friday, Deputy Attorney General Rod Rosenstein announced the indictment of nine Iranians who worked for an organization named the Mabna Institute. According to prosecutors, the defendants stole more than 31 terabytes of data from universities, companies, and government agencies around the world. The cost to the universities alone reportedly amounted to approximately $3.4 billion. The information stolen from these universities was used by the Islamic Revolutionary Guard Corps (IRGC) or sold for profit inside Iran. PhishLabs has been tracking this same threat group since late-2017, designating them Silent Librarian. Since discovery, we have been working with the FBI, ISAC partners, and other international law enforcement agencies to help understand and mitigate these attacks.",
            "meta": {
                "refs": [
                    "https://info.phishlabs.com/blog/silent-librarian-more-to-the-story-of-the-iranian-mabna-institute-indictment",
                    "https://info.phishlabs.com/blog/silent-librarian-university-attacks-continue-unabated-in-days-following-indictment",
                    "https://www.justice.gov/usao-sdny/pr/nine-iranians-charged-conducting-massive-cyber-theft-campaign-behalf-islamic",
                    "https://www.secureworks.com/blog/back-to-school-cobalt-dickens-targets-universities"
                ],
                "synonyms": [
                    "COBALT DICKENS"
                ]
            },
            "uuid": "5059b44d-2753-4977-b987-4922f09afe6b",
            "value": "Silent Librarian",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "FireEye characterizes APT31 as an actor specialized on intellectual property theft, focusing on data and projects that make a particular organization competetive in its field. Based on available data (April 2016), FireEye assesses that APT31 conducts network operations at the behest of the Chinese Government.",
            "meta": {
                "country": "China",
                "refs": [
                    "https://www.microsoft.com/security/blog/2017/03/27/detecting-and-mitigating-elevation-of-privilege-exploit-for-cve-2017-0005/",
                    "https://duo.com/decipher/apt-groups-moving-down-the-supply-chain",
                    "https://github.com/GuardaCyber/APT-Groups-and-Operations/blob/master/Reports/FireEye%20Intel%20-%20APT31%20Threat%20Group%20Profile.pdf"
                ],
                "synonyms": [
                    "APT 31",
                    "ZIRCONIUM"
                ]
            },
            "uuid": "6bf7e6b6-5917-45a6-9567-f0baba79768c",
            "value": "APT31",
            "aptmap": {
                "operatingFrom": "CHN",
                "victims": []
            }
        },
        {
            "description": "BLACKGEAR is an espionage campaign which has targeted users in Taiwan for many years. Multiple papers and talks have been released covering this campaign, which used the ELIRKS backdoor when it was first discovered in 2012. It is known for using blogs and microblogging services to hide the location of its actual command-and-control (C&C) servers. This allows an attacker to change the C&C server used quickly by changing the information in these posts.\nLike most campaigns, BLACKGEAR has evolved over time. Our research indicates that it has started targeting Japanese users. Two things led us to this conclusion: first, the fake documents that are used as part of its infection routines are now in Japanese. Secondly, it is now using blogging sites and microblogging services based in Japan for its C&C activity.",
            "meta": {
                "refs": [
                    "https://blog.trendmicro.com/trendlabs-security-intelligence/blackgear-espionage-campaign-evolves-adds-japan-target-list/",
                    "https://blog.trendmicro.com/trendlabs-security-intelligence/blackgear-cyberespionage-campaign-resurfaces-abuses-social-media-for-cc-communication/"
                ],
                "synonyms": [
                    "Topgear",
                    "Comnie",
                    "BLACKGEAR"
                ]
            },
            "uuid": "8b62b20a-5b1c-48af-8424-e8220cd2fbd7",
            "value": "Blackgear",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "BlackOasis is a Middle Eastern threat group that is believed to be a customer of Gamma Group. The group has shown interest in prominent figures in the United Nations, as well as opposition bloggers, activists, regional news correspondents, and think tanks. A group known by Microsoft as NEODYMIUM is reportedly associated closely with BlackOasis operations, but evidence that the group names are aliases has not been identified.",
            "meta": {
                "refs": [
                    "https://securelist.com/blackoasis-apt-and-new-targeted-attacks-leveraging-zero-day-exploit/82732/",
                    "https://www.fireeye.com/blog/threat-research/2017/09/zero-day-used-to-distribute-finspy.html",
                    "https://attack.mitre.org/groups/G0063/"
                ]
            },
            "uuid": "8fbd195f-5e03-4e85-8ca5-4f1dff300bec",
            "value": "BlackOasis",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "BlackTech is a cyber espionage group operating against targets in East Asia, particularly Taiwan, and occasionally, Japan and Hong Kong. Based on the mutexes and domain names of some of their C&C servers, BlackTech\u2019s campaigns are likely designed to steal their target\u2019s technology.\nFollowing their activities and evolving tactics and techniques helped us uncover the proverbial red string of fate that connected three seemingly disparate campaigns: PLEAD, Shrouded Crossbow, and of late, Waterbear.\nPLEAD is an information theft campaign with a penchant for confidential documents. Active since 2012, it has so far targeted Taiwanese government agencies and private organizations. PLEAD\u2019s toolset includes the self-named PLEAD backdoor and the DRIGO exfiltration tool. PLEAD uses spear-phishing emails to deliver and install their backdoor, either as an attachment or through links to cloud storage services. Some of the cloud storage accounts used to deliver PLEAD are also used as drop off points for exfiltrated documents stolen by DRIGO.\nPLEAD actors use a router scanner tool to scan for vulnerable routers, after which the attackers will enable the router\u2019s VPN feature then register a machine as virtual server. This virtual server will be used either as a C&C server or an HTTP server that delivers PLEAD malware to their targets.",
            "meta": {
                "refs": [
                    "https://blog.trendmicro.com/trendlabs-security-intelligence/following-trail-blacktech-cyber-espionage-campaigns/",
                    "https://www.welivesecurity.com/2018/07/09/certificates-stolen-taiwanese-tech-companies-plead-malware-campaign/",
                    "https://www.welivesecurity.com/2019/05/14/plead-malware-mitm-asus-webstorage/"
                ]
            },
            "uuid": "320c42f7-eab7-4ef9-b09a-74396caa6c3e",
            "value": "BlackTech",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "FIN5 is a financially motivated threat group that has targeted personally identifiable information and payment card information. The group has been active since at least 2008 and has targeted the restaurant, gaming, and hotel industries. The group is made up of actors who likely speak Russian.",
            "meta": {
                "refs": [
                    "https://www.darkreading.com/analytics/prolific-cybercrime-gang-favors-legit-login-credentials/d/d-id/1322645?",
                    "https://attack.mitre.org/groups/G0053/"
                ]
            },
            "uuid": "44dc2f9c-8c28-11e9-9b9a-7fdced8cbf70",
            "value": "FIN5",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "FireEye has observed multiple targeted intrusions occurring in North America \u2014 predominately in Canada \u2014 dating back to at least 2013 and continuing through at least 2016, in which the attacker(s) have compromised organizations\u2019 networks and sought to monetize this illicit access by exfiltrating sensitive data and extorting victim organizations. In some cases, when the extortion demand was not met, the attacker(s) destroyed production Windows systems by deleting critical operating system files and then shutting down the impacted systems. Based on near parallel TTPs used by the attacker(s) across these targeted intrusions, we believe these clusters of activity are linked to a single, previously unobserved actor or group that we have dubbed FIN10.",
            "meta": {
                "refs": [
                    "https://www2.fireeye.com/rs/848-DID-242/images/rpt-fin10.pdf",
                    "https://attack.mitre.org/groups/G0051/"
                ]
            },
            "uuid": "f2d02410-8c2c-11e9-8df1-a31c1fb33d79",
            "value": "FIN10",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "Cyber espionage is an issue whose time has come. In this second report from the Information Warfare Monitor, we lay out the findings of a 10-month investigation of alleged Chinese cyber spying against Tibetan institutions. The investigation, consisting of fieldwork, technical scouting, and laboratory analysis, discovered a lot more. The investigation ultimately uncovered a network of over 1,295 infected hosts in 103 countries. Up to 30% of the infected hosts are considered high-value targets and include computers located at ministries of foreign affairs, embassies, international organizations, news media, and NGOs. The Tibetan computer systems we manually investigated, and from which our investigations began, were conclusively compromised by multiple infections that gave attackers unprecedented access to potentially sensitive information.\nAttacks on the Dalai Lama\u2019s Private Office The OHHDL started to suspect it was under surveillance while setting up meetings be-tween His Holiness and foreign dignitaries. They sent an email invitation on behalf of His Holiness to a foreign diplomat, but before they could follow it up with a courtesy telephone call, the diplomat\u2019s office was contacted by the Chinese government and warned not to go ahead with the meeting. The Tibetans wondered whether a computer compromise might be the explanation; they called ONI Asia who called us. (Until May 2008, the first author was employed on a studentship funded by the OpenNet Initiative and the second author was a principal investigator for ONI.)",
            "meta": {
                "refs": [
                    "http://www.nartv.org/mirror/ghostnet.pdf",
                    "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-746.pdf",
                    "https://en.wikipedia.org/wiki/GhostNet"
                ],
                "synonyms": [
                    "Snooping Dragon"
                ]
            },
            "uuid": "cacf2ffc-8c49-11e9-895e-7f5bf9c2ff6d",
            "value": "GhostNet",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "IBM X-Force Research uncovered a Trojan hybrid spawned from the Nymaim and Gozi ISFB malware. It appears that the operators of Nymaim have recompiled its source code with part of the Gozi ISFB source code, creating a combination that is being actively used in attacks against more than 24 U.S. and Canadian banks, stealing millions of dollars so far. X-Force named this new hybrid GozNym. The new GozNym hybrid takes the best of both the Nymaim and Gozi ISFB malware to create a powerful Trojan. From the Nymaim malware, it leverages the dropper\u2019s stealth and persistence; the Gozi ISFB parts add the banking Trojan\u2019s capabilities to facilitate fraud via infected Internet browsers. The end result is a new banking Trojan in the wild.",
            "meta": {
                "refs": [
                    "https://securityintelligence.com/meet-goznym-the-banking-malware-offspring-of-gozi-isfb-and-nymaim/",
                    "https://threatpost.com/attackers-behind-goznym-trojan-set-sights-on-europe/117647/",
                    "https://threatpost.com/goznym-banking-trojan-targeting-german-banks/120075/",
                    "https://www.europol.europa.eu/newsroom/news/goznym-malware-cybercriminal-network-dismantled-in-international-operation"
                ]
            },
            "uuid": "7803b380-8c4c-11e9-90a1-f3880ab3aaa0",
            "value": "GozNym",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "A threat actor using Iranian-language tools, Iranian hosting companies, operating from the Iranian IP space at times was observed targeting the Syrian opposition in an elaborately staged malware operation, Citizen Lab researchers reveal.\nThe operation was first noticed in late 2015, when a member of the Syrian opposition flagged a suspicious email containing a PowerPoint slideshow, which led researchers to a watering hole website with malicious programs, malicious PowerPoint files, and Android malware.\nThe threat actor was targeting Windows and Android devices of well-connected individuals in the Syrian opposition, researchers discovered. They called the actor Group5, because it targets Syrian opposition after regime-linked malware groups, the Syrian Electronic Army, ISIS (also known as the Islamic State or ISIL), and a group linked to Lebanon did the same in the past",
            "meta": {
                "refs": [
                    "https://www.securityweek.com/iranian-actor-group5-targeting-syrian-opposition",
                    "https://attack.mitre.org/groups/G0043/"
                ]
            },
            "uuid": "bc8390aa-8c4e-11e9-a9cb-e37c361210af",
            "value": "Group5",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        },
        {
            "description": "McAfee Advanced Threat Research analysts have discovered a new operation targeting humanitarian aid organizations and using North Korean political topics as bait to lure victims into opening malicious Microsoft Word documents. Our analysts have named this Operation Honeybee, based on the names of the malicious documents used in the attacks.\nAdvanced Threat Research analysts have also discovered malicious documents authored by the same actor that indicate a tactical shift. These documents do not contain the typical lures by this actor, instead using Word compatibility messages to entice victims into opening them.\nThe Advanced Threat Research team also observed a heavy concentration of the implant in Vietnam from January 15\u201317.",
            "meta": {
                "refs": [
                    "https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/mcafee-uncovers-operation-honeybee-malicious-document-campaign-targeting-humanitarian-aid-groups/",
                    "https://attack.mitre.org/groups/G0072/"
                ]
            },
            "uuid": "2d82a18e-8c53-11e9-b0ec-536b62fa3d86",
            "value": "Honeybee",
            "aptmap": {
                "operatingFrom": null,
                "victims": []
            }
        }
    ],
    "version": 113
};

export default actors;