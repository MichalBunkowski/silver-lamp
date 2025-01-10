<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { actions } from "astro:actions";

  const getGreetings = async () => {
    const { data, error } = await actions.getGreeting({ name: "John Doe" });
    if (!error) alert(data);
  };
</script>

<Button onclick={getGreetings}>Get greetings</Button>
