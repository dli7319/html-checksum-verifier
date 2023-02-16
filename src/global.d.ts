declare module '*.css';

declare module 'node-forge/lib/md5' {
    import forge from 'node-forge';
    export default forge.md5;
}

declare module 'node-forge/lib/sha1' {
    import forge from 'node-forge';
    export default forge.sha1;
}

declare module 'node-forge/lib/sha256' {
    import forge from 'node-forge';
    export default forge.sha256;
}