import type { ErrorRequestHandler, Request, Response } from 'express';
import { ZodError } from 'zod';

interface ApiResponse {
  success: false;
  message: string;
}

export const notFoundHandler = (_request: Request, response: Response<ApiResponse>): void => {
  response.status(404).json({ success: false, message: 'The requested resource was not found.' });
};

export const errorHandler: ErrorRequestHandler = (error: unknown, _request, response, _next) => {
  if (error instanceof SyntaxError && 'status' in error && error.status === 400) {
    response.status(400).json({ success: false, message: 'Please check your submitted information.' });
    return;
  }

  if (error instanceof ZodError) {
    response.status(400).json({ success: false, message: 'Please check your submitted information.' });
    return;
  }

  if (typeof error === 'object' && error !== null && 'type' in error && error.type === 'entity.too.large') {
    response.status(413).json({ success: false, message: 'The submitted information is too large.' });
    return;
  }

  console.error('Unexpected API error');
  response.status(500).json({ success: false, message: "We couldn't send your message right now. Please try again later." });
};
