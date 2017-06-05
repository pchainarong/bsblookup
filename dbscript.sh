#!/bin/bash
sqlite3 pegbsb.db <<EOF
CREATE TABLE IF NOT EXISTS bsblookup (
code TEXT PRIMARY KEY,
bankCode TEXT NOT NULL,
bankDetail TEXT,
address TEXT,
city TEXT,
state TEXT,
postcode TEXT,
service TEXT);
DELETE FROM bsblookup;
.mode csv
.import BSB.csv bsblookup
SELECT COUNT(*) FROM bsblookup;
EOF
