import { nowInSeconds, requiredEnvVar } from "@lawallet/module";
import { NostrEvent } from "@nostr-dev-kit/ndk";

export function buildCreditsEvent(pubkey: string, credits: number): NostrEvent {
    return {
        pubkey: requiredEnvVar("NOSTR_PUBLIC_KEY"),
        kind: 31111,
        content: '',
        created_at: nowInSeconds(),
        tags: [
            ['d', `credits:${pubkey}`],
            ['amount', credits.toString()]
        ]
    }
}

export function buildLogEvent(subscriptionId: string, status: string, response: string | null, attempt: number): NostrEvent {
    return {
        pubkey: requiredEnvVar("NOSTR_PUBLIC_KEY"),
        kind: 1112,
        content: JSON.stringify({
            status,
            response,
            attempt
        }),
        created_at: nowInSeconds(),
        tags: [
            ['t', `log:${subscriptionId}`],
        ]
    }
}