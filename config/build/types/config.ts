export type BuildMode = 'development' | 'production';

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
};

export type BuildOptions = {
    mode: BuildMode;
    paths: BuildPaths;
    port: number;
};

export type BuildEnv = {
    mode: BuildMode;
    port: number;
};
