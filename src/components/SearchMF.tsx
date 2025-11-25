import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export function SerachMF({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (query: string) => void;
}) {
  return (
    <InputGroup>
      <InputGroupInput
        placeholder="Search Mutual Funds..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
