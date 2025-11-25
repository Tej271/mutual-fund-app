import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export function SerachMf(){
    return (
      <InputGroup>
        <InputGroupInput placeholder="Search Mutual Funds..."  />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    );
}
