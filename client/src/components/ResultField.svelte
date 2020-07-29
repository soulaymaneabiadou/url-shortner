<script>
  import { tick } from 'svelte';

  export let shortUrl;
  let valueCopy = null;
  let resultField;

  const copyToClipboard = async () => {
    valueCopy = shortUrl;

    await tick();
    resultField.focus();
    resultField.select();

    try {
      const successful = document.execCommand('copy');
    } catch (error) {
      alert('Error');
    }

    valueCopy = null;
  };
</script>

<style>
  .result {
    width: 813px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 5rem;
  }

  .result-container {
    width: 100%;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .btn {
    display: inline-block;
    background: transparent;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    cursor: pointer;
  }
  .btn-primary {
    background: var(--accent);
    color: #ffffff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 12px 26px;
    font-weight: 500;
  }
  .btn:hover {
    background: var(--secondary);
  }

  .btn:active {
    background: var(--accent);
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }

  .btn-inside {
    margin-left: -76px;
  }
  label {
    font-size: 1rem;
    color: #ffffff;
  }

  .result-field {
    width: 96%;
    background: var(--secondary);
    color: #ffffff;
    font: inherit;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 22px 18px;
    margin-top: 10px;
  }
</style>

<div class="result">
  <div class="result-container">
    <label for="result" class="result-label">The result :</label>
    <input
      type="text"
      name="result"
      class="result-field"
      value={shortUrl}
      bind:this={resultField}
      readonly />
    <button
      type="button"
      on:click={copyToClipboard}
      class="btn btn-primary btn-inside uppercase">
      copy
    </button>
  </div>
</div>
