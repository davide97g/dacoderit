import { LogInIcon } from "lucide-react";

export function JoinDiscord() {
  return (
    <p className="text-sm text-background flex items-center bg-purple-400 rounded-md p-4 mb-6 gap-2">
      Join our Discord community to connect with other developers and contribute
      to open source projects!
      <a
        href="https://discord.gg/uZ848MKE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary underline ml-2"
      >
        <LogInIcon className="inline-block h-4 w-4 mr-1" />
        Join Discord
      </a>
    </p>
  );
}
