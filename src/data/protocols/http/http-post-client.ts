interface HttpPostClient {
  post(url: string): Promise<void>;
}

export { HttpPostClient };
