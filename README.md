Steps to reproduce:

1. clone
2. cd litvirtualizer && yarn install
3. npm run build

This should produce the error output

```
Error: Build failed with 3 errors:
error: Cannot traverse from chunk "../node_modules/lit-virtualizer/lib/uni-virtualizer/lib/layouts/Layout1d.js" to chunk "chunk.m6OIDGXX.js"
error: Refusing to overwrite input file: node_modules/lit-virtualizer/lib/uni-virtualizer/lib/layouts/Layout1d.js
error: Refusing to overwrite input file: node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
    at failureErrorWithLog (/home/pk/Dokumente/esbuild_edge/litvirtualizer/node_modules/esbuild/lib/main.js:407:15)
    at /home/pk/Dokumente/esbuild_edge/litvirtualizer/node_modules/esbuild/lib/main.js:373:29
    at handleIncomingPacket (/home/pk/Dokumente/esbuild_edge/litvirtualizer/node_modules/esbuild/lib/main.js:357:9)
    at Socket.readFromStdout (/home/pk/Dokumente/esbuild_edge/litvirtualizer/node_modules/esbuild/lib/main.js:305:7)
    at Socket.emit (events.js:315:20)
    at Socket.EventEmitter.emit (domain.js:505:15)
    at addChunk (_stream_readable.js:295:12)
    at readableAddChunk (_stream_readable.js:271:9)
    at Socket.Readable.push (_stream_readable.js:212:10)
    at Pipe.onStreamRead (internal/stream_base_commons.js:186:23)
```

A second run of `npm run build` then produces this

```
Error: Build failed with 1 error:
node_modules/lit-virtualizer/lib/uni-virtualizer/lib/layouts/Layout1d.js:1:14: error: Could not resolve ""
    at failureErrorWithLog (/[some-path]/esbuild_edge/litvirtualizer/node_modules/esbuild/lib/main.js:407:15)
    at /[some-path]/esbuild_edge/litvirtualizer/node_modules/esbuild/lib/main.js:373:29
    at handleIncomingPacket (/[some-path]/esbuild_edge/litvirtualizer/node_modules/esbuild/lib/main.js:357:9)
    at Socket.readFromStdout (/[some-path]/esbuild_edge/litvirtualizer/node_modules/esbuild/lib/main.js:305:7)
    at Socket.emit (events.js:315:20)
    at Socket.EventEmitter.emit (domain.js:505:15)
    at addChunk (_stream_readable.js:295:12)
    at readableAddChunk (_stream_readable.js:271:9)
    at Socket.Readable.push (_stream_readable.js:212:10)
    at Pipe.onStreamRead (internal/stream_base_commons.js:186:23)
```